import { cn } from '@utils/cn'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const TypewriterEffect = ({
	words,
	className,
	cursorClassName,
}: {
	words: {
		text: string
		className?: string
	}[]
	className?: string
	cursorClassName?: string
}) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(''),
		}
	})

	const [scope, animate] = useAnimate()
	useEffect(() => {
		animate(
			'span',
			{
				display: 'inline-block',
				opacity: 1,
			},
			{
				duration: 0.3,
				delay: stagger(0.1),
				ease: 'easeInOut',
			}
		)
	}, [animate])

	const renderWords = () => {
		return (
			<motion.div
				ref={scope}
				className='inline'>
				{wordsArray.map((word, idx) => {
					return (
						<div
							key={`word-${idx}`}
							className='inline-block'>
							{word.text.map((char, index) => (
								<motion.span
									initial={{}}
									key={`char-${index}`}
									className={cn(
										`dark:text-white text-black opacity-0 hidden`,
										word.className
									)}>
									{char}
								</motion.span>
							))}
							&nbsp;
						</div>
					)
				})}
			</motion.div>
		)
	}
	return (
		<div
			className={cn(
				'text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center',
				className
			)}>
			{renderWords()}
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className={cn(
					'inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500',
					cursorClassName
				)}></motion.span>
		</div>
	)
}

export const SmoothWriter = ({
	words,
	className,
	cursorClassName,
}: {
	words: {
		text: string
		className?: string
	}[]
	className?: string
	cursorClassName?: string
}) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(''),
		}
	})
	const renderWords = () => {
		return (
			<div>
				{wordsArray.map((word, idx) => {
					return (
						<div
							key={`word-${idx}`}
							className='inline-block'>
							{word.text.map((char, index) => (
								<span
									key={`char-${index}`}
									className={cn(`dark:text-white text-black `, word.className)}>
									{char}
								</span>
							))}
							&nbsp;
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<div className={cn('flex space-x-1 my-6', className)}>
			<motion.div
				className='overflow-hidden '
				initial={{
					width: '0%',
				}}
				animate={{
					width: 'fit-content',
				}}
				transition={{
					duration: 1,
					ease: 'linear',
					delay: 0,
				}}>
				<div
					className='text-[1.75rem] tracking-wider mx-[1px] font-thin dark:text-orange-100 text-indigo-300'
					style={{
						whiteSpace: 'nowrap',
					}}>
					{renderWords()}{' '}
				</div>{' '}
			</motion.div>
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.8,

					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className={cn(
					'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-10 bg-indigo-500',
					cursorClassName
				)}></motion.span>
		</div>
	)
}
