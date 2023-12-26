import { useCallback } from 'react'
import { CardContent, CardFooter } from '@components/card'
import { Form, FormField } from '@components/form'
import { SubmitAction } from '@components/submit'
import { Header } from '@components/header'
import { checkoutInputs } from '../fields'
import { FieldItemProps, FormProps } from './types'
import FieldItem from './components/FieldItem'
import Advanced from './components/Advanced'

const render = (props: FieldItemProps) => <FieldItem {...props} />

const ActiveForm = ({ form, onSubmit, loading }: FormProps) => {
	const { formState, handleSubmit, control } = form
	const { isValid } = formState

	const Submit = useCallback(() => {
		return (
			<SubmitAction
				activeLabel='Generate Payment Link'
				inactiveLabel='Generating'
				isValid={isValid}
				loading={loading}
			/>
		)
	}, [loading, isValid])

	const primaryFields = checkoutInputs.slice(0, 8)
	const secondaryFields = checkoutInputs.slice(8)

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Header title='Generate Payment Link' />
				<CardContent className='grid grid-cols-2 md:gap-x-10 gap-x-2 gap-y-8'>
					{primaryFields.map((item) => (
						<FormField
							disabled={loading}
							key={item.name}
							control={control}
							name={item.name}
							render={({ field }) => render({ field, item })}
						/>
					))}
				</CardContent>
				<Advanced
					control={control}
					fields={secondaryFields}
					loading={loading}
				/>
				<CardFooter>
					<Submit />
				</CardFooter>
			</form>
		</Form>
	)
}

export default ActiveForm
