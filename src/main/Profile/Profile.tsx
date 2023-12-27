import { ProfileWrap } from '../Tabliture/styled'
import { Sidebar } from './components/Sidebar'

export const Profile = () => {
	return (
		<ProfileWrap>
			<div className='md:block space-y-6'>
				{/* <div>
					<h2 className='text-2xl font-bold tracking-tight'>Profile</h2>
				</div> */}
				<div className='flex flex-col lg:flex-row lg:items-center lg:space-x-12'>
					<aside className='-mx-4 lg:w-1/8 lg:h-[calc(100vh-110px)] lg:border-r-[0.33px] dark:border-slate-800 border-slate-400/50'>
						<Sidebar />
					</aside>
					<div className='flex-1 lg:max-w-2xl'>Profile Settings</div>
				</div>
			</div>
		</ProfileWrap>
	)
}
