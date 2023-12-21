import { HTMLInputTypeAttribute } from 'react'
import { CheckoutSchema } from './schema'

export type CheckoutName =
	| 'iso_number'
	| 'policy_number'
	| 'given_names'
	| 'surname'
	| 'email'
	| 'mobile_number'
	| 'amount'
	| 'assured_name'
	| 'agent_name'
	| 'item_name'
	| 'item_quantity'
	| 'item_price'
	| 'item_category'
	| 'fee_type'
	| 'fee_amount'

export type CheckoutInput = {
	name: CheckoutName

	label: string
	placeholder: string
	inputType: 'input' | 'select'
	type: HTMLInputTypeAttribute
}
export const checkoutInputs: CheckoutInput[] = [
	{
		name: 'iso_number',
		label: 'ISO Number',
		placeholder: 'ISO Number',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'policy_number',
		label: 'Policy Number',
		placeholder: 'Policy number',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'given_names',
		label: 'First Names',
		placeholder: 'First name',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'surname',
		label: 'Last Name',
		placeholder: 'Last name',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'mobile_number',
		label: 'Phone Number',
		placeholder: 'Phone',
		inputType: 'input',
		type: 'tel',
	},
	{
		name: 'email',
		label: 'Client Email address',
		placeholder: 'Email',
		inputType: 'input',
		type: 'email',
	},
	{
		name: 'amount',
		label: 'Total Amount',
		placeholder: '1,000.00',
		inputType: 'input',
		type: 'number',
	},
	{
		name: 'assured_name',
		label: 'Assured Name',
		placeholder: 'Name of Policy Holder',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'agent_name',
		label: 'Agent Name',
		placeholder: 'Name of the agent',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'item_name',
		label: 'Item Name',
		placeholder: 'Item name',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'item_quantity',
		label: 'Item Quantity',
		placeholder: 'Item Quantity',
		inputType: 'input',
		type: 'number',
	},
	{
		name: 'item_price',
		label: 'Item Price',
		placeholder: 'Item Price',
		inputType: 'input',
		type: 'number',
	},
	{
		name: 'item_category',
		label: 'Item Category',
		placeholder: 'Item Category',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'fee_type',
		label: 'Fee Type',
		placeholder: 'Fee Type',
		inputType: 'select',
		type: 'text',
	},
	{
		name: 'fee_amount',
		label: 'Fee Amount',
		placeholder: 'Fee Amount',
		inputType: 'input',
		type: 'number',
	},
]

export const checkoutDefaults: CheckoutSchema = {
	iso_number: '01234567',
	policy_number: 'GC-PCV-100930489',
	given_names: 'Olivia',
	surname: 'Ponton',
	email: 'olivia@ponton.com',
	mobile_number: '09162344333',
	amount: '1000',
	assured_name: 'assured name',
	agent_name: 'Manuel',
	item_name: 'E-Policy',
	item_quantity: '1',
	item_price: '1000',
	item_category: 'Car Insurance',
	fee_type: 'Processing',
	fee_amount: '500',
}
