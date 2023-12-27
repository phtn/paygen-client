import { HStack } from '../../styled'
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
import { onSuccess } from '@utils/toast'

const Statusbar = () => {
	const { user } = useContext(AuthContext)
	const { status } = useServerStatus()

	useEffect(() => {
		if (status) {
			onSuccess('Server online')
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
				<code className='text-[10px] '>
					{user ? <code>{user.uid}</code> : null}
				</code>
				<VersionNumber />
			</StatusRight>
		</HStack>
	)
}
export default Statusbar
