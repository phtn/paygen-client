import InputField from './InputField'
import SelectField from './SelectField'
import { FieldItemProps } from '../types'

const FieldItem = ({ field, item }: FieldItemProps) => {
	return item.inputType === 'input' ? (
		<InputField
			field={field}
			label={item.label}
			placeholder={item.placeholder}
			type={item.type}
			name={item.name}
			alt={item.alt}
		/>
	) : (
		<SelectField
			placeholder={'Select Fee Type'}
			label={'Select Fee'}
			items={feeTypes}
			{...field}
			onValueChange={field.onChange}
		/>
	)
}

const feeTypes = [
	{ value: 'Delivery', display: 'Delivery', disabled: false },
	{ value: 'Processing', display: 'Processing', disabled: false },
	{ value: 'Other', display: 'Other', disabled: false },
]

export default FieldItem
