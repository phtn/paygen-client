import { SparklesCore } from '@components/et'

export const Aliens = () => (
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
