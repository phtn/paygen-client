import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@utils/cn'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'bg-gradient-to-tr from-indigo-600 from-30% via-indigo-500 via-60% to-indigo-200 disabled:from-gray-500/50 disabled:to-indigo-200/50 hover:via-100% hover:to-indigo-100 transition-all duration-500 hover:text-orange-100 text-indigo-50',
				destructive:
					'bg-destructive dark:text-orange-400/80 text-orange-500/80 hover:text-orange-500',
				outline:
					'border border-indigo-400 dark:text-indigo-200 text-indigo-500 dark:hover:bg-indigo-500/30 hover:bg-indigo-300/30 dark:hover:text-orange-100 hover:text-indigo-500 transition-all duration-500',
				secondary: 'bg-indigo-200 text-indigo-600',
				ghost:
					'hover:bg-accent dark:hover:text-orange-100 hover:text-indigo-500 hover:bg-indigo-200/30 text-slate-400',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-8 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Variant = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Variant.displayName = 'Variant'

export { Variant, buttonVariants }
