import { FormControl, FormField, FormItem, FormLabel } from '@components/form'
import { FormType, LoginField, LoginSchema } from '../schema'
import { useCallback } from 'react'
import { SubmitAction } from '@components/submit'
import { Input } from '@components/input'
import { Control, ControllerRenderProps } from 'react-hook-form'

type ActiveFormProps = {
	form: FormType
	loading: boolean
	loginFields: LoginField[]
	onSubmit: (values: LoginSchema) => void
}

type RenderProps = {
	field: ControllerRenderProps<LoginSchema>
	item: LoginField
}

type FieldProps = {
	fields: LoginField[]
	loading: boolean
	control: Control<LoginSchema>
}

const render = ({ field, item }: RenderProps) => (
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
)

const Fields = ({ control, fields, loading }: FieldProps) => {
	return fields.map((item) => (
		<FormField
			key={item.name}
			disabled={loading}
			control={control}
			name={item.name}
			render={({ field }) => render({ field, item })}
		/>
	))
}

export const ActiveForm = ({
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
	}, [loading, isValid])

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Fields
				control={control}
				fields={loginFields}
				loading={loading}
			/>
			<Submit />
		</form>
	)
}
