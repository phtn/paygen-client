import { useCallback } from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@components/accordion'
import { CardContent, CardFooter } from '@components/card'
import { Form, FormField } from '@components/form'
import { Loading } from '@components/loading'
import { qe } from '@utils/helpers'
import { checkoutInputs } from '../fields'
import { Submit } from '../styled'
import { FieldItemProps, FormProps } from './types'
import FieldItem from './FieldItem'

const ActiveForm = ({ form, onSubmit, loading }: FormProps) => {
	const { formState, handleSubmit, control } = form
	const { isValid } = formState

	const SubmitOptions = useCallback(() => {
		const options = qe(
			<Loading />,
			<span className='font-bold'>Generate Link</span>
		)
		return (
			<Submit disabled={!isValid || loading}>{options.get(loading)}</Submit>
		)
	}, [loading, isValid])

	const render = useCallback(
		(props: FieldItemProps) => <FieldItem {...props} />,
		[]
	)

	const primaryInputs = checkoutInputs.slice(0, 8)
	const secondaryInputs = checkoutInputs.slice(8)

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent className='grid grid-cols-2 gap-x-4 gap-y-8'>
					{primaryInputs.map((item) => (
						<FormField
							disabled={loading}
							key={item.name}
							control={control}
							name={item.name}
							render={({ field }) => render({ field, item })}
						/>
					))}
				</CardContent>
				<Accordion
					className='px-6 mb-3'
					type='single'
					collapsible>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='text-teal-500'>
							Advanced
						</AccordionTrigger>
						<AccordionContent className='bg-teal-50/5 pt-5 rounded'>
							<CardContent
								className='grid
								grid-cols-2
								gap-4'>
								{secondaryInputs.map((item) => (
									<FormField
										disabled={loading}
										key={item.name}
										control={control}
										name={item.name}
										render={({ field }) => render({ field, item })}
									/>
								))}
							</CardContent>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<CardFooter>
					<SubmitOptions />
				</CardFooter>
			</form>
		</Form>
	)
}

export default ActiveForm
