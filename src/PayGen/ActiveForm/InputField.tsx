import {
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '../../components/form'
import { InputFieldProps } from './types'
import { Input } from '../../components/input'

const InputField = (props: InputFieldProps) => {
	const { label, placeholder, type, field } = props
	return (
		<FormItem>
			<FormLabel className='text-xs text-foreground flex items-center'>
				{/* <Validate /> */}
				{label}
			</FormLabel>
			<FormControl>
				<Input
					placeholder={placeholder}
					{...field}
					type={type}
				/>
			</FormControl>
			<FormMessage />
		</FormItem>
	)
}
export default InputField
