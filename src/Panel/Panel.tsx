import { useTheme } from 'next-themes'
import { qe } from '../utils/helpers'
import { Dark, Item, Light, Mode, Wrap } from './styled'

const Panel = () => {
	const { theme, setTheme } = useTheme()

	const handleChangeMode = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	const ModeOptions = () => {
		const options = qe(<Light />, <Dark />)
		return (
			<Mode
				mode={theme}
				onClick={handleChangeMode}>
				{options.get(theme === 'dark')}
			</Mode>
		)
	}
	return (
		<Wrap>
			<Item>
				<ModeOptions />
			</Item>
		</Wrap>
	)
}

export default Panel
