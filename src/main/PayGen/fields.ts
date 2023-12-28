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
	alt: string
}
export const checkoutInputs: CheckoutInput[] = [
	{
		name: 'iso_number',
		label: 'ISO Number',
		placeholder: 'ISO Number',
		inputType: 'input',
		type: 'text',
		alt: 'file',
	},
	{
		name: 'policy_number',
		label: 'Policy Number',
		placeholder: 'Policy number',
		inputType: 'input',
		type: 'text',
		alt: 'reader',
	},
	{
		name: 'given_names',
		label: 'Payer Given Name',
		placeholder: 'First name',
		inputType: 'input',
		type: 'text',
		alt: 'name',
	},
	{
		name: 'surname',
		label: 'Payer Last Name',
		placeholder: 'Last name',
		inputType: 'input',
		type: 'text',
		alt: 'name',
	},
	{
		name: 'mobile_number',
		label: 'Payer Phone Number',
		placeholder: 'Phone',
		inputType: 'input',
		type: 'tel',
		alt: 'mobile',
	},
	{
		name: 'email',
		label: 'Payer Email Address',
		placeholder: 'Email',
		inputType: 'input',
		type: 'email',
		alt: 'email',
	},
	{
		name: 'amount',
		label: 'Total Amount Due',
		placeholder: '1,000.00',
		inputType: 'input',
		type: 'number',
		alt: 'money',
	},
	{
		name: 'assured_name',
		label: 'Assured Name',
		placeholder: 'Name of Policy Holder',
		inputType: 'input',
		type: 'text',
		alt: 'user',
	},
	{
		name: 'agent_name',
		label: 'Agent Name',
		placeholder: 'Name of the agent',
		inputType: 'input',
		type: 'text',
		alt: 'name',
	},
	{
		name: 'item_name',
		label: 'Item Name',
		placeholder: 'Item name',
		inputType: 'input',
		type: 'text',
		alt: 'file',
	},
	{
		name: 'item_quantity',
		label: 'Item Quantity',
		placeholder: 'Item Quantity',
		inputType: 'input',
		type: 'number',
		alt: 'tokens',
	},
	{
		name: 'item_price',
		label: 'Item Price',
		placeholder: 'Item Price',
		inputType: 'input',
		type: 'number',
		alt: 'money',
	},
	{
		name: 'item_category',
		label: 'Item Category',
		placeholder: 'Item Category',
		inputType: 'input',
		type: 'text',
		alt: 'reader',
	},
	{
		name: 'fee_type',
		label: 'Fee Type',
		placeholder: 'Fee Type',
		inputType: 'select',
		type: 'text',
		alt: 'file',
	},
	{
		name: 'fee_amount',
		label: 'Fee Amount',
		placeholder: 'Fee Amount',
		inputType: 'input',
		type: 'number',
		alt: 'money',
	},
]

export const checkoutDefaults: CheckoutSchema = {
	iso_number: '012',
	policy_number: 'GC-PCV-100930489',
	given_names: 'Olivia',
	surname: 'Ponton',
	email: 'lecena@proton.me',
	mobile_number: '09162344333',
	amount: '1000',
	assured_name: 'Olivia Ponton',
	agent_name: 'Manuel',
	item_name: 'Insurance Policy',
	item_quantity: '1',
	item_price: '1000',
	item_category: 'Auto Insurance',
	fee_type: 'Processing',
	fee_amount: '0',
}
