import { Dispatch, ReactElement, SetStateAction } from 'react'
import { toast } from 'sonner'
import { onSuccess } from './toast'

export const qe = (...args: ReactElement[]) => {
	return new Map([
		[true, args[0]],
		[false, args[1]],
	])
}

export const decimal = (
	num: string | number | undefined,
	digits: number
): string => {
	if (num === undefined) return '0.00'
	const parsedNumber = typeof num === 'string' ? parseFloat(num) : num
	return parsedNumber.toLocaleString('en-US', {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits,
	})
}

export const extractFileType = (input: string): string | null => {
	const match = input.match(/\/(\w+)$/)
	return match ? match[1] : null
}

export const transformDate = (dateString: string): string => {
	const date = new Date(dateString)
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: 'UTC',
	}
	return date.toLocaleString('en-US', options)
}

type CopyFnParams = {
	name: string
	text: string
}
type CopyFn = (params: CopyFnParams) => Promise<boolean> // Return success

export const copyFn: CopyFn = async ({ name, text }) => {
	if (!navigator?.clipboard) {
		toast('Clipboard not supported')
		return false
	}

	try {
		await navigator.clipboard.writeText(text)
		onSuccess(`${name ? 'Copied: ' + name : 'Copied.'}`, limitText(text))
		return true
	} catch (error) {
		toast.error('Copy failed.')
		return false
	}
}

export const limitText = (text: string | number) => {
	if (typeof text === 'number') {
		const str = text.toString()
		return str.substring(0, 30)
	}
	if (text.length > 45) {
		return `${text.substring(0, 40)} ...`
	}
	return text.substring(0, 45)
}

export const getNextElement = <T>(
	array: T[],
	currentIndex: number,
	setState: Dispatch<SetStateAction<number>>
) => {
	const nextIndex = (currentIndex + 1) % array.length // Calculate the next index with wrap-around
	setState(nextIndex)
	return nextIndex
}
