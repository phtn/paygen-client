import * as React from 'react'

import { cn } from '../utils/cn'
import {
	PersonIcon,
	MagnifyingGlassIcon,
	LockClosedIcon,
	IdCardIcon,
	FileTextIcon,
	ReaderIcon,
	EnvelopeClosedIcon,
	MobileIcon,
	CardStackPlusIcon,
	TokensIcon,
	UploadIcon,
} from '@radix-ui/react-icons'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export type IconName =
	| 'user'
	| 'name'
	| 'file'
	| 'reader'
	| 'email'
	| 'mobile'
	| 'money'
	| 'tokens'
	| 'upload'
	| 'password'
type IconPrefixType = {
	name: IconName
	icon: React.ReactElement
}
const iconClassname = 'h-[16px] w-[16px] dark:text-orange-200/80 text-slate-600'
const IconPrefix: IconPrefixType[] = [
	{ name: 'user', icon: <PersonIcon className={iconClassname} /> },
	{ name: 'name', icon: <IdCardIcon className={iconClassname} /> },
	{ name: 'file', icon: <FileTextIcon className={iconClassname} /> },
	{ name: 'reader', icon: <ReaderIcon className={iconClassname} /> },
	{ name: 'email', icon: <EnvelopeClosedIcon className={iconClassname} /> },
	{ name: 'mobile', icon: <MobileIcon className={iconClassname} /> },
	{ name: 'money', icon: <CardStackPlusIcon className={iconClassname} /> },
	{ name: 'tokens', icon: <TokensIcon className={iconClassname} /> },
	{ name: 'upload', icon: <UploadIcon className={iconClassname} /> },
	{ name: 'password', icon: <LockClosedIcon className={iconClassname} /> },
]

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md border-[0.33px[] bg-gray-500/20  pl-3 text-sm ring-offset-teal-500 focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-1 placeholder:text-muted',
					className
				)}>
				{
					IconPrefix[IconPrefix.findIndex((item) => item.name === props.alt)]
						.icon
				}
				<input
					{...props}
					type={type}
					ref={ref}
					className='w-full p-2 ml-[11px] placeholder:text-muted-foreground bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
				/>
			</div>
		)
	}
)
Input.displayName = 'Input'

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>

const Search = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md border-[0.33px[] border-gray-400 bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 placeholder:text-muted',
					className
				)}>
				<MagnifyingGlassIcon className='h-[16px] w-[16px]' />
				<input
					{...props}
					type='search'
					ref={ref}
					className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
				/>
			</div>
		)
	}
)

Search.displayName = 'Search'

const Email = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md overflow-hidden border-[0.33px[] border-gray-400 bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
					className
				)}>
				<PersonIcon className='h-[18px] w-[18px] mx-[1px] text-primary/70' />
				<input
					{...props}
					type='email'
					ref={ref}
					className='w-full py-2 px-[12px] border-l border-[#efefef] ml-[12px] placeholder:text-muted-foreground/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
				/>
			</div>
		)
	}
)

Email.displayName = 'Email'

const Password = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md overflow-hidden border-[0.33px] border-gray-400 bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
					className
				)}>
				<LockClosedIcon className='h-[20px] w-[20px] text-primary/70' />
				<input
					{...props}
					type='email'
					ref={ref}
					className='w-full py-2 px-[12px] border-l border-[#efefef] ml-[12px] placeholder:text-muted-foreground/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
				/>
			</div>
		)
	}
)

Password.displayName = 'Password'

export { Email, Input, Password, Search }
