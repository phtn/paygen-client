import { useCallback } from 'react'
import { CardContent, CardFooter } from '@components/card'
import { Form, FormField } from '@components/form'
import { SubmitAction } from '@components/submit'
import { Header } from '@components/header'
import { checkoutDefaults, checkoutInputs } from '../fields'
import { FieldItemProps, FormProps } from './types'
import FieldItem from './components/FieldItem'
import Advanced from './components/Advanced'
import { Variant } from '@components/variant'

const render = (props: FieldItemProps) => <FieldItem {...props} />

const ActiveForm = ({ form, onSubmit, loading }: FormProps) => {
	const { formState, handleSubmit, control, reset } = form
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

	const handleCreateNew = () => {
		reset(checkoutDefaults)
	}

	return (
		<div className='col-span-2 pr-7'>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Header
						title='Generate Payment Link'
						subtext='Fill out all required input fields.'>
						<Variant
							onClick={handleCreateNew}
							className='mx-5'
							size='sm'
							variant='outline'>
							NEW
						</Variant>
					</Header>

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
		</div>
	)
}

export default ActiveForm
