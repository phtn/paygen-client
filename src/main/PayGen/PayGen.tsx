import { Home } from '../Tabliture/styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutSchema, checkoutSchema } from './schema'
import { checkoutDefaults } from './fields'
import { useEmailParams, usePayGen } from './hooks'
import ActiveForm from './ActiveForm'
import ActiveDisplay from './ActiveDisplay'
import { Container, GridContent } from './styled'

const PayGen = () => {
	const form = useForm<CheckoutSchema>({
		resolver: zodResolver(checkoutSchema),
		defaultValues: checkoutDefaults,
	})

	const { createPaymentLink, loading, payload } = usePayGen()
	const { recipient } = useEmailParams(form)

	const onSubmit = async (values: CheckoutSchema) => {
		await createPaymentLink(values)
	}

	return (
		<Home>
			<Container>
				<GridContent>
					<ActiveForm
						form={form}
						loading={loading}
						onSubmit={onSubmit}
					/>
					<ActiveDisplay
						data={payload}
						recipient={recipient}
					/>
				</GridContent>
			</Container>
		</Home>
	)
}

export default PayGen
