import { FormField } from '@components/form'
import { Control } from 'react-hook-form'
import { CheckoutInput } from 'src/main/PayGen/fields'
import { CheckoutSchema } from 'src/main/PayGen/schema'
import { FieldItemProps } from '../types'
import FieldItem from './FieldItem'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@components/accordion'
import { CardContent } from '@components/card'

type AdvancedProps = {
	control: Control<CheckoutSchema>
	fields: CheckoutInput[]
	loading: boolean
}

const render = (props: FieldItemProps) => <FieldItem {...props} />

const Advanced = ({ control, fields, loading }: AdvancedProps) => (
	<Accordion
		className='mt-8 mb-3'
		type='single'
		collapsible>
		<AccordionItem value='item-1'>
			<AccordionTrigger className='dark:text-indigo-100 text-indigo-500 font-bold border-b-[0.33px] dark:border-slate-600 border-indigo-300'>
				Advanced
			</AccordionTrigger>
			<AccordionContent className='bg-transparent pt-5 rounded'>
				<CardContent className='grid grid-cols-2 md:gap-x-10 gap-x-2 gap-y-8 px-1'>
					{fields.map((item) => (
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
)

export default Advanced
