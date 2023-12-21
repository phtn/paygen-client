import { Dispatch, SetStateAction } from 'react'

export const qe = (...args: any[]) => {
	const pair = new Map([
		[true, args[0]],
		[false, args[1]],
	])
	return pair
}

export const toggleState = (
	setState: Dispatch<SetStateAction<boolean>>
): void => {
	setState((prevState) => !prevState)
}

export const decimal = (
	num: string | number | undefined,
	digits: number
): string => {
	if (num === undefined) return '0.00'
	const parsedNumber = typeof num === 'string' ? parseFloat(num) : num
	const formattedNumber = parsedNumber.toLocaleString('en-US', {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits,
	})
	return formattedNumber
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
