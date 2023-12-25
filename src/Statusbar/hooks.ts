import { trpc } from '@utils/trpc'
import { useEffect, useState } from 'react'

export const useServerStatus = () => {
	const [status, setStatus] = useState(false)

	const checkStatus = async () => {
		const Ok = () => {
			setStatus(true)
		}
		const Err = () => {
			setStatus(false)
		}
		await trpc.checkStatus.query().then(Ok, Err)
	}

	useEffect(() => {
		checkStatus()
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!status) {
				checkStatus()
			}
		}, 10000)
		return () => clearInterval(interval)
	}, [status])

	return { status }
}
