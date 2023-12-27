import { IconName } from '@components/input'
import { HTMLInputTypeAttribute } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(4, {
		message: 'Password must be atleast 4 chars',
	}),
})

export type LoginSchema = z.infer<typeof loginSchema>

export const loginDefaults: LoginSchema = {
	email: '',
	password: '',
}

export type LoginName = 'email' | 'password'

export type FormType = UseFormReturn<LoginSchema>

export type LoginFormProps = {
	form: FormType
	loading: boolean
	onSubmit: (values: LoginSchema) => void
}

export interface LoginField {
	name: LoginName
	label: string
	placeholder: string
	inputType: 'input' | 'select'
	type: HTMLInputTypeAttribute
	alt: IconName
}

export const loginFields: LoginField[] = [
	{
		name: 'email',
		label: 'Email',
		placeholder: 'Email',
		inputType: 'input',
		type: 'email',
		alt: 'email',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Password',
		inputType: 'input',
		type: 'password',
		alt: 'password',
	},
]
