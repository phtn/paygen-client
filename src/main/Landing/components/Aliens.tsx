import { SparklesCore } from '@components/et'

export const Aliens = () => (
	<div className='absolute w-[50px] top-[7vh] lg:inset-x-[360px] rotate-[380deg] '>
		<SparklesCore
			id='tsparticlesfullpage'
			background='transparent'
			minSize={0.6}
			maxSize={1.4}
			particleDensity={42}
			className='w-[50px] h-[175px]'
			particleColor='#ffedd5'
		/>
	</div>
)
