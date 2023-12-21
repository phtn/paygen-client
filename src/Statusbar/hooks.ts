import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { serverStatus } from 'src/utils/axios'

export const useServerStatus = () => {
	const [status, setStatus] = useState(false)

	useEffect(() => {
		const getStatus = serverStatus().then((res: any) => {
			console.log()
			if (res?.response.status !== 200) {
				setStatus(false)
				toast.error('Disconnected from Server.')
			} else {
				setStatus(true)
				toast.success('Connected to Server.')
			}
		})

		setStatus(false)

		return () => {
			getStatus
		}
	}, [])

	return { status }
}
