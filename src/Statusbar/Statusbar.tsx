import { Link2Icon } from '@radix-ui/react-icons'
import { HStack } from '../styled'
import Panel from '../Panel'

const Statusbar = () => {
	return (
		<HStack>
			<div className='w-[200px] h-[40px] flex items-center justify-between px-[14px]'>
				<Link2Icon className='w-[20px] h-[20px] text-teal-500' />
				<span className='text-[12px] tracking-wider font-medium dark:text-slate-500'>
					<code>All systems normal</code>
				</span>
			</div>
			<Panel />
			<div className='w-[200px] h-[40px] flex items-center justify-end px-[14px]'>
				<span className='text-[12px] tracking-wider font-medium dark:text-slate-500'>
					<code className='text-teal-300'>v1.0.0</code>
				</span>
			</div>
		</HStack>
	)
}
export default Statusbar
