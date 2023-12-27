import { useEffect, useState } from 'react'
import { type UseFormReturn } from 'react-hook-form'
import { type PaymentResponse } from '@sources/payment'
import { type CheckoutSchema } from './schema'
import { onError, onSuccess } from '@utils/toast'
import { trpc } from '@utils/trpc'

export const useEmailParams = (form: UseFormReturn<CheckoutSchema>) => {
	const [recipient, setRecipient] = useState('')

	useEffect(() => {
		const values = form.getValues()
		setRecipient(values.email)
	}, [form])

	return { recipient }
}

export const usePayGen = () => {
	const [loading, setLoading] = useState(false)
	const [payload, setPayload] = useState<PaymentResponse>()

	let startTime: number

	const createPaymentLink = async (values: CheckoutSchema) => {
		const Err = (err: Error) => {
			setLoading(false)
			onError(err.message)
		}
		const Ok = async (response: PaymentResponse) => {
			setLoading(false)
			setPayload(response)
			const endTime = performance.now()
			const elapsedTime = endTime - startTime
			onSuccess(`Done in ${(elapsedTime / 1000).toFixed(2)} seconds`)
		}
		startTime = performance.now()
		setLoading(true)
		await trpc.createLink.query(values).then(Ok, Err)
	}

	return { createPaymentLink, loading, payload }
}
