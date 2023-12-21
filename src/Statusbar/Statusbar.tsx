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

const Statusbar = () => {
	const Status = useCallback(() => {
		const options = qe(<ActiveStatus />, <InactiveStatus />)
		return <StatusLeft>{options.get(true)}</StatusLeft>
	}, [])

	return (
		<HStack>
			<Status />
			<Panel />
			<StatusRight>
				<VersionNumber />
			</StatusRight>
		</HStack>
	)
}
export default Statusbar
