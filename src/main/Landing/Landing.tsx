import { EvervaultCard } from '@components/evervault'
import { GridBackground } from '@components/grid'
import { XBorder } from '@components/xborder'
import { AvatarIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'
import { qe } from '@utils/helpers'
import { useCallback, useState } from 'react'
import Profile from '../User/User'
import { Variant } from '@components/variant'
import { SparklesCore } from '@components/et'

const UserLogin = ({ onClick }: { onClick: () => void }) => (
	<div className='absolute top-[calc(100vh-97vh)] left-[calc(100vw-50px)]'>
		<IconButton
			variant='ghost'
			onClick={onClick}
			size='4'>
			<AvatarIcon className='h-[20px] w-[20px]' />
		</IconButton>
	</div>
)

const Pyramid = () => (
	<div
		className={`md:w-[calc(100vw/2)] hidden md:flex items-center md:justify-start justify-center bg-[url(./logo-v1.svg)] bg-cover bg-no-repeat`}>
		<div className='ml-10 mb-[-4px]'>
			<XBorder className='bg-gradient-to-br from-indigo-700 to-orange-100 shadow-lg shadow-indigo-400/50'>
				<EvervaultCard className='h-[calc(100vw/5)] w-[calc(100vw/5)] shadow-lg shadow-indigo-500' />
			</XBorder>
		</div>
	</div>
)

const Aliens = () => (
	<div className='absolute top-[15vh] lg:inset-x-[425px]'>
		<SparklesCore
			id='tsparticlesfullpage'
			background='transparent'
			minSize={0.6}
			maxSize={1.4}
			particleDensity={100}
			className='w-[50px] h-[175px]'
			particleColor='#ffedd5'
		/>
	</div>
)

const Jumbotron = () => (
	<div className='md:w-[calc(100vw/2)] flex items-center md:justify-center px-6 z-20'>
		<div className='flex flex-col'>
			<h1 className='text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 from-30% via-orange-100 via-70% to-orange-50 to-100% md:text-[3rem] text-[2.5rem] leading-[3.25rem] font-extrabold'>
				PayGen
			</h1>
			<h2 className='text-[1.5rem] tracking-wider mx-[1px] font-light dark:text-indgo-50 text-indigo-400'>
				Reliable Payments
			</h2>
			<div className='h-[125px] lg:w-[300px] flex items-center text-orange-50/70 font-medium'>
				The Arrival of Advanced Payment Integration suited for complex business
				transactions and subscriptions.
			</div>
			<div className='h-[75px] lg:w-[340px] flex items-end md:justify-between justify-around'>
				<Variant variant='default'>Get Started</Variant>
				<Variant variant='outline'>Request Demo</Variant>
			</div>
		</div>
	</div>
)

export const Landing = () => {
	const [view, setView] = useState(false)

	const handleLoginView = () => {
		setView(true)
	}

	const ViewOptions = useCallback(() => {
		const options = qe(<Profile />, <Pyramid />)
		return <>{options.get(view)}</>
	}, [view])

	return (
		<GridBackground>
			<UserLogin onClick={handleLoginView} />
			<Aliens />
			<div className='absolute lg:inset-x-20 top-[15vh] bg-gradient-to-r from-transparent via-indigo-700 to-transparent h-[1px] w-3/4 blur-sm' />
			<div className='absolute lg:inset-x-20 top-[15vh] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
			<div className='absolute lg:inset-x-60 top-[15vh] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-2/4 blur-sm' />
			<div className='absolute lg:inset-x-60 top-[15vh] bg-gradient-to-r from-transparent via-orange-300 to-transparent h-px w-1/3' />

			<div className='md:grid md:grid-cols-2'>
				<Jumbotron />
				<ViewOptions />
			</div>
		</GridBackground>
	)
}
