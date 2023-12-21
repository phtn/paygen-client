import { trpc } from '@utils/trpc'
import { UserCredential } from 'firebase/auth'
import { useState } from 'react'

export const useAuth = () => {
	const [user, _setUser] = useState<UserCredential | null>(null)

	const signInWithGoogle = async () => {
		const response = await trpc.signInWithGoogle.query()
		console.log(response)
	}

	const signOut = async () => {
		const response = await trpc.signOut.query()
		console.log(response)
	}

	return { signInWithGoogle, signOut, user }
}
