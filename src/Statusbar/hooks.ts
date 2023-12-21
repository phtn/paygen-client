import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export const useServerStatus = () => {
	const [status, setStatus] = useState(false)

	return { status }
}
