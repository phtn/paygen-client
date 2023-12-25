import { HStack } from '../styled'
import Panel from '../Panel'
import { qe } from 'src/utils/helpers'
import {
	ActiveStatus,
	InactiveStatus,
	StatusLeft,
	StatusRight,
	VersionNumber,
} from './styled'
import { useCallback, useContext, useEffect } from 'react'
import { AuthContext } from '@context'
import { useServerStatus } from './hooks'
import { toast } from 'sonner'

const Statusbar = () => {
	const { user } = useContext(AuthContext)
	const { status } = useServerStatus()

	useEffect(() => {
		if (status) {
			toast.success('Server online')
		} else {
			toast.error('Disconnected')
		}
	}, [status])

	const Status = useCallback(() => {
		const options = qe(<ActiveStatus />, <InactiveStatus />)
		return <StatusLeft>{options.get(status)}</StatusLeft>
	}, [status])

	return (
		<HStack>
			<Status />
			<Panel />
			<StatusRight>
				{user ? <code>user: {user.uid}</code> : null}
				<VersionNumber />
			</StatusRight>
		</HStack>
	)
}
export default Statusbar
