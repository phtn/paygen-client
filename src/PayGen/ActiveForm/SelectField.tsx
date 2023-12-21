import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../../components/select'

export interface Item {
	value: string
	display: string
	disabled: boolean
}

type SelectProps = {
	onValueChange: (value: string) => void
	placeholder: string
	label: string
	items: Item[]
}

const SelectField = (props: SelectProps) => {
	const { onValueChange, placeholder, items, label } = props
	const onChange = (value: string) => {
		onValueChange(value)
	}
	return (
		<Select onValueChange={onChange}>
			<SelectTrigger className='mt-6'>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className='bg-[#191818]'>
				<SelectGroup>
					<SelectLabel>{label}</SelectLabel>
					{items.map((item) => (
						<SelectItem
							defaultValue={items[0].value}
							key={item.value}
							disabled={item.disabled}
							value={item.value}>
							{item.display}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
export default SelectField
