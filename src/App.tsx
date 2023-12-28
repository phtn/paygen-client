import Statusbar from './main/Statusbar'
import Tabliture from './main/Tabliture'
import { VStack } from './styled'
import { AuthContext } from './lib/context'
import { useCallback, useContext } from 'react'
import { qe } from '@utils/helpers'
import { Landing } from './main/Landing'
import './App.css'

const AuthedPage = () => (
	<VStack>
		<Tabliture />
		<Statusbar />
	</VStack>
)

const App = () => {
	const { user } = useContext(AuthContext)

	const PageOptions = useCallback(() => {
		const isAuthed = Object.keys(user || {}).length > 0
		const options = qe(<AuthedPage />, <Landing />)
		return <>{options.get(isAuthed)}</>
	}, [user])

	return <PageOptions />
}
export default App
