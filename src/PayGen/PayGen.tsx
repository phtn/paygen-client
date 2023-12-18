import { Home } from '../Tabliture/styled'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkoutSchema } from './schema'
import { checkoutDefaults } from './fields'
import useCheckout from './hooks'

import ActiveForm from './ActiveForm'
import { Container, GridContent, Title, TitleContainer } from './styled'
import ActiveDisplay from './ActiveDisplay'
import { useCallback } from 'react'
import { PaymentResponse } from 'src/sources/payment'

const PayGen = () => {
	const { loading, onGenerate, customerData } = useCheckout()
	const form = useForm<z.infer<typeof checkoutSchema>>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: checkoutDefaults,
	})

	const onSubmit = (values: z.infer<typeof checkoutSchema>) => {
		onGenerate(values)
		form.reset(checkoutDefaults)
	}
	const Id = useCallback(() => <span>{''}</span>, [customerData])

	return (
		<Home>
			<Container>
				<TitleContainer>
					<Title>Generate Payment Link</Title>
					<Id />
				</TitleContainer>
				<GridContent>
					<ActiveForm
						form={form}
						loading={loading}
						onSubmit={onSubmit}
					/>
					<ActiveDisplay data={customerData as PaymentResponse} />
				</GridContent>
			</Container>
		</Home>
	)
}

export default PayGen
