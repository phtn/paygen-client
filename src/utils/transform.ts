import { formatPhone } from './helpers'
import { createInvoiceNumber } from './invoicing'
import { CheckoutValues } from '../PayGen/types'
import { CreateCheckoutResource } from '../sources/payment'

export const transform = (values: CheckoutValues): CreateCheckoutResource => {
	const { amount, given_names, surname, email, mobile_number } = values
	const data: CreateCheckoutResource = {
		external_id: createInvoiceNumber(),
		amount: +amount,
		currency: 'PHP',
		customer: {
			given_names,
			surname,
			email,
			mobile_number: formatPhone(mobile_number),
		},
	}

	return data
}
