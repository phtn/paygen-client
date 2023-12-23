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
import { useCallback } from 'react'
import { useAuth } from 'src/User/hooks'

const Statusbar = () => {
	const { user } = useAuth()

	const Status = useCallback(() => {
		const options = qe(<ActiveStatus />, <InactiveStatus />)
		return <StatusLeft>{options.get(true)}</StatusLeft>
	}, [])

	return (
		<HStack>
			<Status />
			<Panel />
			<StatusRight>
				<span>{user?.uid}</span>
				<VersionNumber />
			</StatusRight>
		</HStack>
	)
}
export default Statusbar
