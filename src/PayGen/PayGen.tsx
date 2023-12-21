import { Home } from '../Tabliture/styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutSchema, checkoutSchema } from './schema'
import { checkoutDefaults } from './fields'

import ActiveForm from './ActiveForm'
import { Container, GridContent, Title, TitleContainer } from './styled'
import ActiveDisplay from './ActiveDisplay'
import { useCallback } from 'react'
import { useTRPCPayGen } from './utils'
import { CardTitle } from '@components/card'

const PayGen = () => {
	const form = useForm<CheckoutSchema>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: checkoutDefaults,
	})

	const { createPaymentLink, loading, payload } = useTRPCPayGen()

	const onSubmit = (values: CheckoutSchema) => {
		createPaymentLink(values)
		form.reset(checkoutDefaults)
	}
	const Id = useCallback(
		() => <CardTitle>{payload?.items[0].name}</CardTitle>,
		[payload]
	)

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
					<ActiveDisplay data={payload} />
				</GridContent>
			</Container>
		</Home>
	)
}

export default PayGen
