import { Home } from '../Tabliture/styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutSchema, checkoutSchema } from './schema'
import { checkoutDefaults } from './fields'
import { useTRPCPayGen } from './hooks'
import ActiveForm from './ActiveForm'
import ActiveDisplay from './ActiveDisplay'
import { Container, GridContent } from './styled'

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

	return (
		<Home>
			<Container>
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
