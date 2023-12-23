import Statusbar from './Statusbar'
import Tabliture from './Tabliture'
import { VStack } from './styled'
import './App.css'
import { AuthProvider } from './lib/context'

const App = () => {
	return (
		<AuthProvider>
			<VStack>
				<Tabliture />
				<Statusbar />
			</VStack>
		</AuthProvider>
	)
}
export default App
