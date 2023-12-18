import './App.css'
import Statusbar from './Statusbar/Statusbar'
import Tabliture from './Tabliture'
import { VStack } from './styled'
const App = () => (
	<VStack>
		<Tabliture />
		<Statusbar />
	</VStack>
)
export default App
