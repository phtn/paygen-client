import { useEffect, useState } from 'react'
import { type PaymentResponse } from '@sources/payment'

export const useData = (data: PaymentResponse | undefined) => {
	const [values, setValues] = useState<PaymentResponse>({} as PaymentResponse)

	useEffect(() => {
		if (data) {
			setValues(data as PaymentResponse)
		}
	}, [data])

	return values
}
