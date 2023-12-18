import { HTMLInputTypeAttribute } from 'react'
import { UseFormReturn, ControllerRenderProps } from 'react-hook-form'
import { CheckoutName, CheckoutInput } from '../fields'
import { CheckoutValues } from '../types'

export type FormProps = {
	form: UseFormReturn<CheckoutValues>
	loading: boolean
	onSubmit: (values: CheckoutValues) => void
}
export type InputFieldProps = {
	label: string
	placeholder: string
	field: ControllerRenderProps<CheckoutValues>
	type: HTMLInputTypeAttribute
	name: CheckoutName
}

export type FieldItemProps = {
	field: ControllerRenderProps<CheckoutValues>
	item: CheckoutInput
}
