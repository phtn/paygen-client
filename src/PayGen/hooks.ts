import { CheckoutSchema } from './schema'
import { toast } from 'sonner'
import { useState } from 'react'
import { PaymentResponse } from '@sources/payment'
import { trpc } from '@utils/trpc'
import { onError } from '@utils/toast'

export const useTRPCPayGen = () => {
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
			toast.success(`Done in ${(elapsedTime / 1000).toFixed(2)} seconds`)
		}
		startTime = performance.now()
		setLoading(true)
		await trpc.createLink.query(values).then(Ok, Err)
	}

	return { createPaymentLink, loading, payload }
}
