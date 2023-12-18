import { z } from 'zod'

export const checkoutSchema = z.object({
	iso_number: z
		.string()
		.min(8, {
			message: 'ISO Number is 8 digits.',
		})
		.max(25),
	policy_number: z
		.string()
		.min(16, {
			message: 'Invalid Policy Number Format.',
		})
		.max(25),
	given_names: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(25),
	surname: z
		.string()
		.min(2, {
			message: 'Name must be at least 2 characters.',
		})
		.max(25),
	email: z
		.string()
		.min(2, {
			message: 'Invalid Email.',
		})
		.max(35),
	mobile_number: z
		.string()
		.min(10, {
			message: 'Invalid Phone Number',
		})
		.max(14),
	amount: z.string().min(3),
	agent: z.string().min(3),
	itemName: z.string().min(4).optional(),
	itemQty: z.string().min(1).optional(),
	itemPrice: z.string().min(3).optional(),
	itemCat: z.string().min(4).optional(),
	feeType: z.string().optional(),
	feeAmount: z.string().min(3).optional(),
})
