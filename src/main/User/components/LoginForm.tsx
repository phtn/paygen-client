import { Form } from '@components/form'
import { LoginFormProps, loginFields } from '../schema'
import { ActiveForm } from './ActiveForm'

export const LoginForm = (props: LoginFormProps) => {
	const { form, onSubmit, loading } = props
	return (
		<Form {...form}>
			<ActiveForm
				form={form}
				loading={loading}
				loginFields={loginFields}
				onSubmit={onSubmit}
			/>
		</Form>
	)
}
