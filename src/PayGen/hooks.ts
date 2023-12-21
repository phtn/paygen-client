import { useState } from 'react'
import { z } from 'zod'
import { checkoutSchema } from './schema'
import { toast } from 'sonner'
import { createAxiosInstance, paymentConfig as config } from 'src/utils/axios'
import { PaymentResponse } from 'src/sources/payment'

const useGenerate = () => {
	const [loading, setLoading] = useState(false)
	const [customerData, setCustomerData] = useState<PaymentResponse>()

	const onGenerate = async (values: z.infer<typeof checkoutSchema>) => {
		setLoading(true)
		const startTime = performance.now()

		const axiosInstance = createAxiosInstance(config)
		const Err = (err: Error) => {
			setLoading(false)
			throw new Error(err.message)
		}
		const Ok = async (response: any) => {
			setLoading(false)
			const endTime = performance.now()
			const elapsedTime = endTime - startTime
			toast.success(`Done in ${(elapsedTime / 1000).toFixed(2)} seconds`)

			if (response.status === 200) {
				setCustomerData(response)
			}
		}

		return await axiosInstance
			.post('/v1/paygen', JSON.stringify(values))
			.then(Ok, Err)
	}

	return { loading, onGenerate, customerData }
}

export default useGenerate
