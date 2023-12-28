import { Variant } from '@components/variant'
import { AuthContext } from '@context'
import { cn } from '@utils/cn'
import { useContext, useState } from 'react'

const items = [
	{ title: 'Profile', href: 'profile' },
	{ title: 'Settings', href: 'settings' },
	{ title: 'Configure', href: 'conf' },
]

export const Sidebar = () => {
	const [active, setActive] = useState('profile')
	const { signOut } = useContext(AuthContext)

	const handleOnSelect = (href: string) => () => {
		setActive(href)
	}
	const handleSignOut = () => {
		signOut()
	}
	return (
		<nav
			className={cn(
				'flex lg:flex-col lg:space-x-0 lg:space-y-4 space-x-4 h-full p-6 lg:items-start'
			)}>
			{items.map((item) => (
				<Variant
					className='font-medium w-full'
					key={item.href}
					onClick={handleOnSelect(item.href)}
					variant={active === item.href ? 'secondary' : 'ghost'}>
					{item.title}
				</Variant>
			))}

			<Variant
				className='font-medium w-full'
				onClick={handleSignOut}
				variant='destructive'>
				Sign out
			</Variant>
		</nav>
	)
}
