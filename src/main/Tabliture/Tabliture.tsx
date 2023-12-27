import { Tabs } from '@radix-ui/themes'
import { Content, Reports, Settings, Tab, Trigger } from './styled'
import PayGen from '../PayGen'
import { Profile } from '../Profile/Profile'

const Tabliture = () => (
	<Tab defaultValue='home'>
		<div className='absolute inset-x-20 top-9 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/8 blur-sm' />
		<div className='absolute inset-x-20 top-9 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
		<div className='absolute inset-x-60 top-9 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-2/5 blur-sm' />
		<div className='absolute inset-x-60 top-9 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />
		<Tabs.List>
			<Trigger value='home'>PayGen</Trigger>
			<Trigger value='reports'>Reports</Trigger>
			<Trigger value='settings'>Settings</Trigger>
			<Trigger value='profile'>Profile</Trigger>
		</Tabs.List>

		<Content>
			<PayGen />

			<Reports>
				<span>Access and update your reports.</span>
			</Reports>

			<Settings>
				<span>Edit your profile or update contact information.</span>
			</Settings>

			<Profile />
		</Content>
	</Tab>
)

export default Tabliture
