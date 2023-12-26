import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@components/form'
import {
	FormType,
	LoginField,
	LoginFormProps,
	LoginSchema,
	loginFields,
} from '../schema'
import { Input } from '@components/input'
import { useCallback } from 'react'
import { SubmitAction } from '@components/submit'

const LoginForm = (props: LoginFormProps) => {
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

type ActiveFormProps = {
	form: FormType
	loading: boolean
	loginFields: LoginField[]
	onSubmit: (values: LoginSchema) => void
}

const ActiveForm = ({
	loading,
	loginFields,
	form,
	onSubmit,
}: ActiveFormProps) => {
	const { handleSubmit, control, formState } = form
	const { isValid } = formState

	const Submit = useCallback(() => {
		return (
			<SubmitAction
				activeLabel='Sign in'
				inactiveLabel='Signing in'
				isValid={isValid}
				loading={loading}
			/>
		)
	}, [loading, formState.isValid])
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{loginFields.map((item) => (
				<FormField
					key={item.name}
					disabled={loading}
					control={control}
					name={item.name}
					render={({ field }) => (
						<FormItem className='my-4'>
							<FormLabel>{item.label}</FormLabel>
							<FormControl>
								<Input
									alt={item.alt}
									placeholder={item.placeholder}
									type={item.type}
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			))}
			<Submit />
		</form>
	)
}
export default LoginForm
