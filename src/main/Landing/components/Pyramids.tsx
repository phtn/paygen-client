import { EvervaultCard } from '@components/evervault'
import { XBorder } from '@components/xborder'

export const Pyramids = () => (
	<div
		className={`md:w-[calc(100vw/2)] hidden md:flex items-center md:justify-start justify-center bg-[url(./logo-v1.svg)] bg-cover bg-no-repeat`}>
		<div className='ml-10 mb-[-4px]'>
			<XBorder className='bg-gradient-to-br from-indigo-700 to-orange-100 shadow-lg shadow-indigo-400/50'>
				<EvervaultCard className='h-[calc(100vw/5)] w-[calc(100vw/5)] shadow-lg shadow-indigo-500' />
			</XBorder>
		</div>
	</div>
)
