'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../utils/cn'
import { Flex } from '@radix-ui/themes'

const labelVariants = cva(
	'text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

type SectionLabelProps = {
	children: React.ReactNode
	extra?: string
	label: string
}

export const SectionLabel = ({ children, extra, label }: SectionLabelProps) => {
	const props = { className: 'mr-1 text-indigo-400 h-4 w-4' }
	const childrenWithProps = React.Children.map(
		children,
		(child: React.ReactNode) => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, props)
			}
			return child
		}
	)
	return (
		<Flex className='text-[12px] items-end pb-2	'>
			{childrenWithProps}
			{label}
			<code className='mx-2 text-slate-400 text-[10.5px] font-medium'>
				{extra}
			</code>
		</Flex>
	)
}

export { Label }
