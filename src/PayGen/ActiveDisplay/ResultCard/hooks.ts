import { PaymentResponse } from '@sources/payment'
import { copyFn } from '@utils/helpers'
import { ChangeEvent, useCallback, useState } from 'react'

export const useEmailHandler = () => {
	const [files, setFiles] = useState<FileList | null>(null)
	const [loading, setLoading] = useState(false)

	const arrayToFileList = (array: File[]) => {
		const fileList = Object.create(FileList.prototype)
		Object.defineProperty(fileList, 'length', {
			value: array.length,
			writable: false,
			enumerable: false,
			configurable: true,
		})
		array.forEach((file, index) => {
			Object.defineProperty(fileList, index, {
				value: file,
				writable: false,
				enumerable: true,
				configurable: true,
			})
		})
		return fileList
	}

	const handleFileChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (!e.target.files) {
				return
			}
			if (!files) {
				setFiles(e.target.files)
			}
			if (files) {
				const fileArray = [...files, ...e.target.files]
				setFiles(fileArray && arrayToFileList(fileArray as File[]))
			}
		},
		[files]
	)

	const handleFileRemove = (index: number) => {
		const updatedFiles = files && [...files].filter((_, i) => index !== i)
		setFiles(updatedFiles && arrayToFileList(updatedFiles))
	}

	const handleSendEmail = () => {
		setLoading(true)
		console.log('sending email')
	}

	return { files, handleFileChange, handleFileRemove, handleSendEmail, loading }
}

type ControllerParams = {
	values: PaymentResponse
}

export const useActiveControls = ({ values }: ControllerParams) => {
	const { external_id, invoice_url, amount, expiry_date } = values

	const copyInvNum = async() => {
		await copyFn({ name: 'Invoice Number', text: external_id })
	}
	const copyInvUrl = async () => {
		await copyFn({ name: 'Payment Link', text: invoice_url })
	}

	const copyAmount = async () => {
		await copyFn({ name: 'Total Amount', text: amount.toString() })
	}
	const copyExpiry = async () => {
		await copyFn({ name: 'Expiry Date', text: expiry_date })
	}

	const topProps = { external_id, invoice_url, copyInvNum, copyInvUrl }
	const midProps = { amount, expiry_date, copyAmount, copyExpiry }

	return { midProps, topProps }
}
