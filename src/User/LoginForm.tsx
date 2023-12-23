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
} from './schema'
import { Input } from '@components/input'
import { useCallback } from 'react'
import { qe } from '@utils/helpers'
import { Loading } from '@components/loading'
import { Submit, Label } from '@components/submit'

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
	const SubmitOptions = useCallback(() => {
		const options = qe(<Loading />, <Label>Sign in</Label>)
		return (
			<Submit disabled={!formState.isValid || loading}>
				{options.get(loading)}
			</Submit>
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
			<SubmitOptions />
		</form>
	)
}
export default LoginForm
