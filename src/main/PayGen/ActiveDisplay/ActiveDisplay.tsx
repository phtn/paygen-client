import { useCallback } from 'react'
import { type PaymentResponse } from '@sources/payment'
import { qe } from '@utils/helpers'
import { ResultCard } from './ResultCard'
import { Display, PayGenLogo } from './styled'
import { useData } from './hooks'

type CustomerData = {
	data: PaymentResponse | undefined
	recipient: string
}

const ActiveDisplay = ({ data, recipient }: CustomerData) => {
	const values = useData(data)

	const Options = useCallback(() => {
		const withValues = Object.keys(values).length > 0
		const options = qe(
			<ResultCard
				values={values}
				recipient={recipient}
			/>,

			<PayGenLogo />
		)
		return <Display>{options.get(withValues)}</Display>
	}, [values, recipient])

	return <Options />
}

export default ActiveDisplay
