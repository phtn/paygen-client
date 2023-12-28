import { Variant } from '@components/variant'
import { SmoothWriter } from '@components/writer'
import { getNextElement } from '@utils/helpers'
import { useCallback, useEffect, useState } from 'react'

const headlines = [
	[{ text: 'Reliable Payments' }],
	[{ text: 'Credit Card Payments' }],
	[{ text: 'Bank Transfer' }],
	[{ text: 'E-wallets' }],
	[{ text: 'Subscriptions' }],
]

export const Jumbotron = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			getNextElement(headlines, currentIndex, setCurrentIndex)
			return () => clearTimeout(timeout)
		}, 5000)
	}, [currentIndex])

	const Writer = useCallback(
		() => <SmoothWriter words={headlines[currentIndex]} />,
		[currentIndex]
	)

	return (
		<div className='md:w-[calc(100vw/2)] flex items-center justify-start px-3 md:px-12 z-20'>
			<div className='flex flex-col'>
				<h1 className='text-transparent bg-clip-text bg-gradient-to-tr dark:from-indigo-400 from-indigo-600 from-30% via-orange-100 via-70% to-orange-50 to-100% md:text-[3rem] text-[2.5rem] leading-[3.25rem] font-extrabold'>
					PayGen
				</h1>
				<h2 className='text-[1.75rem] tracking-wider mx-[1px] font-thin dark:text-orange-100 text-indigo-500'>
					<Writer />
				</h2>
				<div className='h-[90px] lg:w-[350px] text-justify flex items-center dark:text-indigo-300/70 text-indigo-700 font-medium'>
					The Arrival of Advanced Payment Integration suited for complex
					business applications.
				</div>
				<div className='h-[70px] lg:w-[340px] flex items-end md:justify-between justify-around'>
					<Variant variant='default'>Get Started</Variant>
					<Variant variant='outline'>Request Demo</Variant>
				</div>
			</div>
		</div>
	)
}
