import { useCallback, useContext } from 'react'
import { Flex, Tabs } from '@radix-ui/themes'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthContext } from '@lib/context'
import { User } from 'firebase/auth'
import { Container, SignInContent } from './styled'
import { LoginSchema, loginDefaults, loginSchema } from './schema'
import { LoginForm } from './components/LoginForm'
import { Header } from '@components/header'
import { SubmitAction } from '@components/submit'
import { qe } from '@utils/helpers'
import { AvatarIcon } from '@radix-ui/react-icons'
import { Card } from '@components/card'

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

const Login = () => {
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
	}, [form, loading, user, signInWithEmailAndPassword, signOut])

	return (
		<Container>
			<Flex className='items-center'>
				<AvatarIcon className=' mb-7 h-[24px] w-[24px] mr-2 text-indigo-400' />
				<Header title='Login to your account' />
			</Flex>
			<Card className='md:w-[350px] border-0 w-full h-fit'>
				<Tabs.Root defaultValue='signin'>
					<Tabs.List className='text-indigo-200'>
						<Tabs.Trigger
							value='signin'
							className='text-indigo-200'>
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
	)
}

export default Login
