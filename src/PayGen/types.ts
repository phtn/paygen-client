export interface CheckoutValues {
	iso_number: string
	policy_number: string
	given_names: string
	surname: string
	email: string
	mobile_number: string
	amount: string
	agent_name: string
	assured_name: string
	item_name?: string
	item_quantity?: string
	item_price?: string
	item_category?: string
	fee_type?: string
	fee_amount?: string
}
