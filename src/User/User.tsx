import { useCallback, useContext } from 'react'
import { Card, Tabs } from '@radix-ui/themes'
import { Login } from 'src/Tabliture/styled'
import { Header } from '@components/header'
import { Container, SignInContent } from './styled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, loginDefaults, loginSchema } from './schema'
import LoginForm from './LoginForm'
import { AuthContext } from 'src/lib/context'
import { qe } from '@utils/helpers'
import { Submit, Label } from '@components/submit'
import { Loading } from '@components/loading'
import { User } from 'firebase/auth'

type LogoutProps = {
	onSubmit: () => void
	loading: boolean
	user: User | null
}

const LogoutForm = ({ onSubmit, loading, user }: LogoutProps) => {
	const LogoutOptions = useCallback(() => {
		const options = qe(<Loading />, <Label>Logout</Label>)
		return <Submit onClick={onSubmit}>{options.get(loading)}</Submit>
	}, [onSubmit, loading])
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

	const signIn = (values: LoginSchema) => {
		signInWithEmailAndPassword(values)
	}
	const logout = () => {
		signOut()
	}

	const UserOptions = useCallback(() => {
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
	}, [user])

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
