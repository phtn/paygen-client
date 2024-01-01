import { useMotionValue, MotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useMotionTemplate, motion } from 'framer-motion'
import { cn } from '@utils/cn'
import { Photons } from './photons'

export const EvervaultCard = ({
	text,
	subtext,
	className,
}: {
	text?: string
	subtext?: string
	className?: string
}) => {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	const [randomString, setRandomString] = useState('')

	useEffect(() => {
		const str = generateRandomString(1500)
		setRandomString(str)
	}, [])

	type MouseMove = {
		currentTarget: Element
		clientX: number
		clientY: number
	}

	function onMouseMove({ currentTarget, clientX, clientY }: MouseMove) {
		const { left, top } = currentTarget.getBoundingClientRect()
		mouseX.set(clientX - left)
		mouseY.set(clientY - top)

		const str = generateRandomString(1000)
		setRandomString(str)
	}

	return (
		<div
			className={cn(
				'p-0.5 group bg-transparent aspect-square shadow-xl shadow-indigo-300/50 flex items-center justify-center w-full h-full relative clip-path-triangle',
				className
			)}>
			<div
				onMouseMove={onMouseMove}
				className='group/card w-full relative overflow-hidden bg-transparent flex items-end justify-center h-full hover:scale-[120%] transition-all duration-1000'>
				<CardPattern
					mouseX={mouseX}
					mouseY={mouseY}
					randomString={randomString}
				/>
				<div className='relative z-10 flex flex-col items-center justify-end'>
					<div className='relative h-14 w-44 flex items-center justify-center text-white hover:text-black font-extrabold text-4xl blur-0'>
						<div className='absolute w-full h-full' />
						<span className='group-hover:text-black transition-colors duration-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-300 z-30'>
							{text}
						</span>
					</div>
					<span className='font-bold group-hover:bg-black px-3'>{subtext}</span>
				</div>
			</div>
		</div>
	)
}

type PatternParams = {
	mouseX: MotionValue<number>
	mouseY: MotionValue<number>
	randomString: string
}

export function CardPattern({ mouseX, mouseY, randomString }: PatternParams) {
	const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
	const style = { maskImage, WebkitMaskImage: maskImage }

	return (
		<div className='pointer-events-none'>
			<Photons />
			<div className='absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-orange-200 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500'
				style={style}
			/>
			<motion.div
				className='absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100 text-center'
				style={style}>
				<span className='absolute inset-x-0 text-xs text-indigo-100 h-full break-words whitespace-pre-wrap font-mono font-bold transition duration-500'>
					{randomString}
				</span>
			</motion.div>
		</div>
	)
}

// const characters =
// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const characters = '10ネ01オ10'
export const generateRandomString = (length: number) => {
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	return result
}

//export const Icon = ({ className, ...rest }: any) => {
//	return (
//		<svg
//			xmlns='http://www.w3.org/2000/svg'
//			fill='none'
//			viewBox='0 0 24 24'
//			strokeWidth='1.5'
//			stroke='currentColor'
//			className={className}
//			{...rest}>
//			<path
//				strokeLinecap='round'
//				strokeLinejoin='round'
//				d='M12 6v12m6-6H6'
//			/>
//		</svg>
//	)
//}
