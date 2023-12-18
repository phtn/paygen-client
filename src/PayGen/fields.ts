import { HTMLInputTypeAttribute } from 'react'

export type CheckoutName =
	| 'iso_number'
	| 'policy_number'
	| 'given_names'
	| 'surname'
	| 'email'
	| 'mobile_number'
	| 'amount'
	| 'agent'
	| 'itemName'
	| 'itemQty'
	| 'itemPrice'
	| 'itemCat'
	| 'feeType'
	| 'feeAmount'

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
		name: 'agent',
		label: 'Agent Name',
		placeholder: 'Name of the agent',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'itemName',
		label: 'Item Name',
		placeholder: 'Item name',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'itemQty',
		label: 'Item Quantity',
		placeholder: 'Item Quantity',
		inputType: 'input',
		type: 'number',
	},
	{
		name: 'itemPrice',
		label: 'Item Price',
		placeholder: 'Item Price',
		inputType: 'input',
		type: 'number',
	},
	{
		name: 'itemCat',
		label: 'Item Category',
		placeholder: 'Item Category',
		inputType: 'input',
		type: 'text',
	},
	{
		name: 'feeType',
		label: 'Fee Type',
		placeholder: 'Fee Type',
		inputType: 'select',
		type: 'text',
	},
	{
		name: 'feeAmount',
		label: 'Fee Amount',
		placeholder: 'Fee Amount',
		inputType: 'input',
		type: 'number',
	},
]

export const checkoutDefaults = {
	iso_number: '01234567',
	policy_number: 'GC-PCV-100930489',
	given_names: 'Olivia',
	surname: 'Ponton',
	email: 'olivia@ponton.com',
	mobile_number: '09162344333',
	amount: '1000',
	agent: 'Manuel',
	itemName: 'E-Policy',
	itemQty: '1',
	itemPrice: '1000',
	itemCat: 'Car Insurance',
	feeType: 'Processing',
	feeAmount: '500',
}
