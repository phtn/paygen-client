import { GlobeIcon } from '@radix-ui/react-icons'
import tw from 'tailwind-styled-components'

const ActiveIcon = tw(GlobeIcon)`
  dark:text-indigo-300 text-indigo-500 
`
const InactiveIcon = tw(GlobeIcon)`
  text-orange-500 animate-bounce 
`
const StatusLeft = tw.div`
  md:w-[100px] h-[40px] flex items-center 
  px-[14px] whitespace-nowrap
`
const StatusRight = tw.div`
  md:w-[100px] h-[40px] flex items-center justify-end px-[14px]
`
const StatusLabel = tw.span`
  text-[10px] ml-2 font-bold dark:text-slate-400
`
const ActiveStatus = () => (
	<>
		<ActiveIcon />
		<StatusLabel>
			<code className='text-indigo-500 dark:text-indigo-300'>Online</code>
		</StatusLabel>
	</>
)

const InactiveStatus = () => (
	<>
		<InactiveIcon />
		<StatusLabel>
			<code className='text-orange-700 animate-pulse '>Offline</code>
		</StatusLabel>
	</>
)

const VersionNumber = () => (
	<StatusLabel>
		<code>v0.0.2</code>
	</StatusLabel>
)

export {
	ActiveIcon,
	ActiveStatus,
	InactiveStatus,
	InactiveIcon,
	StatusLeft,
	StatusRight,
	VersionNumber,
}
