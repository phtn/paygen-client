import { PaymentResponse } from "@sources/payment"

export const static_data: PaymentResponse = {
	id: '658c8c088013d700e17c6de6',
	external_id: 'INV-3345-41f9-b46b',
	user_id: '656539e932ded2e737c90b75',
	status: 'PENDING',
	merchant_name: 'Re Up Philippines',
	// merchant_profile_picture_url:
	// 'https://du8nwjtfkinx.cloudfront.net/xendit.png',
	amount: 1000,
	expiry_date: '2023-12-28T20:41:44.083Z',
	invoice_url: 'https://checkout-staging.xendit.co/v2/658c8c088013d700e17c6de6',
	// available_banks: [],
	available_retail_outlets: [
		{
			retail_outlet_name: '7ELEVEN',
		},
		{
			retail_outlet_name: 'CEBUANA',
		},
		{
			retail_outlet_name: 'DP_MLHUILLIER',
		},
		{
			retail_outlet_name: 'DP_ECPAY_LOAN',
		},
		{
			retail_outlet_name: 'DP_PALAWAN',
		},
		{
			retail_outlet_name: 'LBC',
		},
	],
	available_ewallets: [
		{
			ewallet_type: 'SHOPEEPAY',
		},
		{
			ewallet_type: 'PAYMAYA',
		},
		{
			ewallet_type: 'GCASH',
		},
		{
			ewallet_type: 'GRABPAY',
		},
	],
	available_qr_codes: [],
	available_direct_debits: [
		{
			direct_debit_type: 'DD_BPI',
		},
		{
			direct_debit_type: 'DD_UBP',
		},
		{
			direct_debit_type: 'DD_CHINABANK',
		},
		{
			direct_debit_type: 'DD_RCBC',
		},
		{
			direct_debit_type: 'DD_BDO_EPAY',
		},
	],
	// available_paylaters: [
	// 	{
	// 		paylater_type: 'BILLEASE',
	// 	},
	// 	{
	// 		paylater_type: 'CASHALO',
	// 	},
	// ],
	// should_exclude_credit_card: false,
	// should_send_email: false,
	// created: '2023-12-27T20:41:44.174Z',
	// updated: '2023-12-27T20:41:44.174Z',
	// currency: 'PHP',
	items: [
		{
			name: '01234567 · GC-PCV-100930489 · Olivia Ponton',
			category: 'Auto Insurance',
			price: 1000,
			quantity: 1,
		},
	],
	merchant_profile_picture: '',
	avalailable_banks: [],
}
