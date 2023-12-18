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

export const formatPhone = (phoneNumber: string) => {
	const regex = /^0|^(63)|\D/g
	if (phoneNumber) {
		const formattedNumber = phoneNumber.replace(regex, '')
		return `+63${formattedNumber}`
	}
	return ''
}
