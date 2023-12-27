import { ReactNode } from 'react'

export const GridBackground = ({ children }: { children: ReactNode }) => {
	return (
		<div className='h-screen w-screen lg:p-10 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative flex items-center justify-center'>
			{/* Radial gradient for the container to give a faded look */}
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]'></div>
			{children}
		</div>
	)
}
