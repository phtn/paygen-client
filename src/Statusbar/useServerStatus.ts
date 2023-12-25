import { trpc } from '@utils/trpc'
import { useState } from 'react'

export const useServerStatus = () => {
	const [status, setStatus] = useState(false)

	const checkStatus = async () => {
		const response = await trpc.checkStatus.query()
		if (response === 'online') {
			setStatus(true)
		} else {
			setStatus(false)
		}
	}

	useEffect()

	return { status, checkStatus }
}
