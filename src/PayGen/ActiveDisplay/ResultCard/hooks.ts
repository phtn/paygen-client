import { ChangeEvent, useState } from 'react'

export const useAttachmentHandler = () => {
	const [files, setFiles] = useState<FileList | null>(null)

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

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log('change', files)
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
	}

	const handleFileRemove = (index: number) => {
		const updatedFiles = files && [...files].filter((_, i) => index !== i)
		setFiles(updatedFiles && arrayToFileList(updatedFiles))
		console.log('remove', files)
	}

	return { files, handleFileChange, handleFileRemove }
}
