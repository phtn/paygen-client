import { useCallback, useContext } from 'react'
import { Card, Tabs } from '@radix-ui/themes'
import { Login } from 'src/Tabliture/styled'
import { Header } from '@components/header'
import { Container, SignInContent } from './styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginDefaults, loginSchema } from './schema'
import LoginForm from './components/LoginForm'
import { AuthContext } from 'src/lib/context'
import { qe } from '@utils/helpers'
import { User } from 'firebase/auth'
import { SubmitAction } from '@components/submit'

type LogoutProps = {
	onSubmit: () => void
	loading: boolean
	user: User | null
}

const LogoutForm = ({ onSubmit, loading, user }: LogoutProps) => {
	const LogoutOptions = useCallback(() => {
		return (
			<SubmitAction
				activeLabel='Logout'
				inactiveLabel='Logging out'
				loading={loading}
				onClick={onSubmit}
			/>
		)
	}, [loading, onSubmit])
	return (
		<div>
			<span>{user?.uid}</span>
			<LogoutOptions />
		</div>
	)
}

const Profile = () => {
	const { signInWithEmailAndPassword, signOut, loading, user } =
		useContext(AuthContext)

	const form = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: loginDefaults,
	})



	const UserOptions = useCallback(() => {
const signIn = (values: LoginSchema) => {
		signInWithEmailAndPassword(values)
	}
	const logout = () => {
		signOut()
	}
		const isAuthed = Object.keys(user || {}).length > 0
		const options = qe(
			<LogoutForm
				onSubmit={logout}
				loading={loading}
				user={user}
			/>,
			<LoginForm
				form={form}
				loading={loading}
				onSubmit={signIn}
			/>
		)
		return <SignInContent value='signin'>{options.get(isAuthed)}</SignInContent>
	}, [form, loading, user, signInWithEmailAndPassword, signOut ])

	return (
		<Login>
			<Container>
				<Header title='Login to your account' />
				<Card className='md:w-[300px] w-full h-[300px]'>
					<Tabs.Root defaultValue='signin'>
						<Tabs.List>
							<Tabs.Trigger value='signin'>
								{user?.uid ? user.uid : 'Sign In'}
							</Tabs.Trigger>
							<Tabs.Trigger value='register'>Register</Tabs.Trigger>
						</Tabs.List>

						<UserOptions />
						<Tabs.Content value='register'>
							<span>Register</span>
						</Tabs.Content>
					</Tabs.Root>
				</Card>
			</Container>
		</Login>
	)
}

export default Profile
