import { Tabs } from '@radix-ui/themes'
import { Content, Login, Reports, Settings, Tab, Trigger } from './styled'
import PayGen from '../PayGen'

const Tabliture = () => (
	<Tab defaultValue='home'>
		<Tabs.List>
			<Trigger value='home'>PayGen</Trigger>
			<Trigger value='reports'>Reports</Trigger>
			<Trigger value='settings'>Settings</Trigger>
			<Trigger value='login'>Login</Trigger>
		</Tabs.List>

		<Content>
			<PayGen />

			<Reports>
				<span>Access and update your reports.</span>
			</Reports>

			<Settings>
				<span>Edit your profile or update contact information.</span>
			</Settings>

			<Login>
				<span>Login to your account.</span>
			</Login>
		</Content>
	</Tab>
)

export default Tabliture
