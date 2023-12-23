import { User } from 'firebase/auth'
import { createContext } from 'react'
import { useAuth } from 'src/User/hooks'
import { LoginSchema } from 'src/User/schema'

type UserContext = {
	user: User | null
	loading: boolean
	signInWithEmailAndPassword: (params: LoginSchema) => void
	signOut: () => void
}

export const AuthContext = createContext<UserContext>({
	user: {} as User | null,
	loading: false,
	signInWithEmailAndPassword: () => {},
	signOut: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { user, loading, signInWithEmailAndPassword, signOut } = useAuth()

	return (
		<AuthContext.Provider
			value={{ user, loading, signInWithEmailAndPassword, signOut }}>
			{children}
		</AuthContext.Provider>
	)
}
