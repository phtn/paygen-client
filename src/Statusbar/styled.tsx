import { GlobeIcon, Link2Icon, LinkBreak2Icon } from '@radix-ui/react-icons'
import tw from 'tailwind-styled-components'

const ActiveIcon = tw(Link2Icon)`
  text-teal-500 
`

const InactiveIcon = tw(LinkBreak2Icon)`
  text-orange-500 animate-bounce 
`

const StatusLeft = tw.div`
  w-[200px] h-[40px] flex items-center justify-between 
  px-[14px]
`
const StatusRight = tw.div`
  w-[200px] h-[40px] flex items-center justify-end px-[14px]
`

const StatusLabel = tw.span`
  text-[12px] tracking-wider font-medium dark:text-slate-500
`
const ActiveStatus = () => (
	<>
		<ActiveIcon />
		<StatusLabel>
			<code>All systems normal</code>
		</StatusLabel>
	</>
)

const InactiveStatus = () => (
	<>
		<InactiveIcon />
		<StatusLabel>
			<code className='text-orange-600'>No Connection</code>
		</StatusLabel>
		<GlobeIcon className='animate-pulse text-blue-400' />
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
