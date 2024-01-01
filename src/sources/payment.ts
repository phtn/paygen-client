export interface LineItem {
	name: string | null
	quantity: number
	price: number // in cents,
	category: string | null
}

export interface PaymentResponse {
	id: string
	external_id: string
	user_id: string
	status: string
	merchant_name: string
	merchant_profile_picture: string
	amount: number
	expiry_date: string
	invoice_url: string
	avalailable_banks: string[]
	available_retail_outlets: Record<string, string>[]
	available_ewallets: Record<string, string>[]
	available_qr_codes: Record<string, string>[]
	available_direct_debits: Record<string, string>[]
	items: LineItem[]
}
