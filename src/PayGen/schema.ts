import { z } from 'zod'

export const checkoutSchema = z.object({
	iso_number: z
		.string()
		.min(8, {
			message: 'ISO Number is 8 digits.',
		})
		.max(8),
	policy_number: z
		.string()
		.min(16, {
			message: 'Invalid Policy Number Format.',
		})
		.max(25),
	given_names: z
		.string()
		.min(1, {
			message: 'Name must be at least 2 characters.',
		})
		.max(25),
	surname: z
		.string()
		.min(1, {
			message: 'Name must be at least 2 characters.',
		})
		.max(25),
	email: z.string().email({
		message: 'Invalid Email.',
	}),
	mobile_number: z
		.string()
		.min(10, {
			message: 'Invalid Phone Number',
		})
		.max(13),
	amount: z.string().min(3),
	agent_name: z.string().max(25),
	assured_name: z.string().min(3).max(25),
	item_name: z.string().optional(),
	item_quantity: z.string().optional(),
	item_price: z.string().optional(),
	item_category: z.string().optional(),
	fee_type: z.string().optional(),
	fee_amount: z.string().optional(),
})

export type CheckoutSchema = z.infer<typeof checkoutSchema>
