import { createContext, useState } from 'react'
import { User, UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { trpc } from '@utils/trpc'
import { LoginSchema } from './schema'
import { onError, onSuccess } from '@utils/toast'

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(false)

	const AuthContext = createContext<User | null>(user)

	const signInWithGoogle = async () => {
		const response = await trpc.signInWithGoogle.query()
		console.log(response)
	}

	const signOut = async () => {
		await trpc.signOut.query()
		setUser(null)
	}

	const signInWithEmailAndPassword = async (params: LoginSchema) => {
		const Ok = (values: UserCredential) => {
			setUser(values.user)
			setLoading(false)
			onSuccess('Login successful')
		}
		const Err = (err: FirebaseError) => {
			setLoading(false)
			onError(err.message)
		}
		setLoading(true)
		await trpc.signInWithEmailAndPassword
			.query(params)
			.then((result: UserCredential) => Ok(result))
			.catch((err: FirebaseError) => Err(err))
	}

	return {
		AuthContext,
		loading,
		signInWithGoogle,
		signInWithEmailAndPassword,
		signOut,
		user,
	}
}
