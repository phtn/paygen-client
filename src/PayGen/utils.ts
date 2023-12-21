import { CheckoutSchema } from './schema'
import { toast } from 'sonner'
import { useState } from 'react'
import { PaymentResponse } from 'src/sources/payment'
import { trpc } from 'src/utils/trpc'

export const useTRPCPayGen = () => {
	const [loading, setLoading] = useState(false)
	const [payload, setPayload] = useState<PaymentResponse>()

	const startTime = performance.now()

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
	const createPaymentLink = async (values: CheckoutSchema) => {
		setLoading(true)
		return await trpc.create.query(values).then(Ok, Err)
	}

	return { createPaymentLink, loading, payload }
}
