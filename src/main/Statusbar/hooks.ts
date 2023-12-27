import { useEffect, useState } from 'react'
import { trpc } from '@utils/trpc'
import { onError } from '@utils/toast'

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
		checkStatus().then((res) => res)
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!status) {
				checkStatus().then((res) => res)
				onError('Disconnected')
			}
		}, 10000)
		return () => clearInterval(interval)
	}, [status])

	return { status }
}
