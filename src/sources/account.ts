export interface IndividualDetail {
	given_names: string
	given_names_non_roman: string
	surname: string
	surname_non_roman: string
	nationality: string
	date_of_birth: string
	place_of_birth: string
	gender: string
	employment: string
}

export interface AccountResponseResource {
	type: string
	date_of_registration: null
	email: string
	mobile_number: string
	phone_number: string
	created: string
	updated: string
	description: string
	hashed_phone_number: string
	domicile_of_registration: string
	kyc_documents: any[]
	id: string
	reference_id: string
	metadata: Record<string, any>
	individual_detail: IndividualDetail
	business_detail: any
	addresses: any[]
	identity_accounts: any[]
}
