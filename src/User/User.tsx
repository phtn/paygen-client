import { Button } from '@radix-ui/themes'
import { useCallback } from 'react'
import { Login } from 'src/Tabliture/styled'
import { useAuth } from './hooks'
import { qe } from '@utils/helpers'

const User = () => {
	const { user, signInWithGoogle, signOut } = useAuth()

	const AuthOptions = useCallback(() => {
		const isAuthed = user !== null
		const options = qe(
			<Button
				onClick={signOut}
				variant='soft'>
				Sign out
			</Button>,
			<Button
				onClick={signInWithGoogle}
				variant='soft'>
				Sign in with Google
			</Button>
		)
		return <>{options.get(isAuthed)}</>
	}, [user])

	return (
		<Login>
			<AuthOptions />
		</Login>
	)
}

export default User
