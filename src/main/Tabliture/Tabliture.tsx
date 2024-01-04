import { Tabs } from '@radix-ui/themes'
import { Content, Settings, Tab, Trigger } from './styled'
import PayGen from '../PayGen'
import { Profile } from '../Profile/Profile'
import Reports from '../Reports'

const Beam = () => (
	<div className='w-screen'>
		<div className='absolute inset-x-20 top-[7.25vh] md:top-[6.8vh] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm' />
		<div className='absolute inset-x-20 top-[7.25vh] md:top-[6.8vh] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
		<div className='absolute inset-x-60 top-[7.25vh] md:top-[6.8vh] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4 blur-sm' />
		<div className='absolute inset-x-60 top-[7.25vh] md:top-[6.8vh] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />
	</div>
)

const Tabliture = () => (
	<Tab defaultValue='home'>
		<Beam />
		<Tabs.List>
			<Trigger value='home'>PayGen</Trigger>
			<Trigger value='reports'>Reports</Trigger>
			<Trigger value='settings'>Set</Trigger>
			<Trigger value='profile'>Pro</Trigger>
		</Tabs.List>

		<Content>
			<PayGen />

			<Reports/>

			<Settings>
				<span>Edit your profile or update contact information.</span>
			</Settings>

			<Profile />
		</Content>
	</Tab>
)

export default Tabliture
