import { ChangeEvent, useCallback, useState } from 'react'
import { type PaymentResponse } from '@sources/payment'
import { copyFn } from '@utils/helpers'
import { onError, onSuccess } from '@utils/toast'
import { trpc } from '@utils/trpc'

type EmailHandlerParams = {
	recipient: string
	values: PaymentResponse
}

export const useEmailHandler = ({ recipient, values }: EmailHandlerParams) => {
	const [files, setFiles] = useState<FileList | null>(null)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')

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

	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value)
	}

	const handleSendEmail = async () => {
		setLoading(true)
		const params = {
			to: recipient,
			cc: null,
			subject: 'Test email',
			text: message,
			html: null,
			attachments: null,
		}
		const Ok = (response: string) => {
			setLoading(false)
			onSuccess(response, `Recipient: ${params.to}`)
		}
		const Err = (err: Error) => {
			setLoading(false)
			onError(err.name, err.message)
		}
		trpc.sendEmail.query(values).then(Ok, Err)
	}

	return {
		files,
		handleFileChange,
		handleFileRemove,
		handleMessageChange,
		handleSendEmail,
		loading,
	}
}

type ControllerParams = {
	values: PaymentResponse
}

export const useActiveControls = ({ values }: ControllerParams) => {
	const { external_id, invoice_url, amount, expiry_date } = values

	const copyInvNum = async () => {
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
