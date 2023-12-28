import { GridBackground } from '@components/grid'
import { qe } from '@utils/helpers'
import { useCallback, useState } from 'react'
import Login from '../Login'
import { Jumbotron } from './components/Jumbotron'
import { Aliens } from './components/Aliens'
import { Pyramids } from './components/Pyramids'
import { User } from './components/User'
import { Arrival } from './components/Arrival'

export const Landing = () => {
	const [view, setView] = useState(false)

	const handleLoginView = () => {
		setView(true)
	}

	const ViewOptions = useCallback(() => {
		const options = qe(<Login />, <Pyramids />)
		return <>{options.get(view)}</>
	}, [view])

	return (
		<GridBackground>
			<User onClick={handleLoginView} />
			<Aliens />
			<Arrival />

			<div className='md:grid md:grid-cols-2 items-center'>
				<Jumbotron />
				<ViewOptions />
			</div>
		</GridBackground>
	)
}
