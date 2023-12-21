import { useCallback, useEffect, useState } from 'react'
import { PaymentResponse } from 'src/sources/payment'
import ResultCard from './ResultCard'
import { Display, PayGenLogo } from './styled'
import { qe } from 'src/utils/helpers'

type CustomerData = {
	data: PaymentResponse | undefined
}
const ActiveDisplay = ({ data }: CustomerData) => {
	const [values, setValues] = useState<PaymentResponse>({} as PaymentResponse)

	useEffect(() => {
		if (data) {
			setValues(data as PaymentResponse)
		}
	}, [data])

	const Options = useCallback(() => {
		const result = Object.keys(values).length > 0
		const options = qe(<ResultCard values={values} />, <PayGenLogo />)
		return <Display>{options.get(result)}</Display>
	}, [values])

	return <Options />
}

export default ActiveDisplay
