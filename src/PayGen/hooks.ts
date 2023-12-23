import { CheckoutSchema } from './schema'
import { toast } from 'sonner'
import { useState } from 'react'
import { PaymentResponse } from '@sources/payment'
import { trpc } from '@utils/trpc'

export const useTRPCPayGen = () => {
	const [loading, setLoading] = useState(false)
	const [payload, setPayload] = useState<PaymentResponse>()

	let startTime: number

	const createPaymentLink = async (values: CheckoutSchema) => {
		const Err = (err: Error) => {
			setLoading(false)
			toast.error(err.message)
			throw new Error(err.message)
		}
		const Ok = async (response: any) => {
			setLoading(false)
			setPayload(response)
			const endTime = performance.now()
			const elapsedTime = endTime - startTime
			toast.success(`Done in ${(elapsedTime / 1000).toFixed(2)} seconds`)
		}
		startTime = performance.now()
		setLoading(true)
		await trpc.create.query(values).then(Ok, Err)
	}

	return { createPaymentLink, loading, payload }
}
