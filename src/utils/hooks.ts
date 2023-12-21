import { useState } from 'react'
import { toast } from 'sonner'

type CopiedValue = string | null
type CopyFnParams = {
	name: string
	text: string
}
type CopyFn = (params: CopyFnParams) => Promise<boolean> // Return success

export const useCopy = (): [CopiedValue, CopyFn] => {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null)

	const copy: CopyFn = async ({ name, text }) => {
		if (!navigator?.clipboard) {
			toast('Clipboard not supported')
			return false
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			await navigator.clipboard.writeText(text)
			toast.success(`${name ? 'Copied: ' + name : 'Copied.'}`)
			setCopiedText(text)
			return true
		} catch (error) {
			toast.error('Copy failed.')
			setCopiedText(null)
			return false
		}
	}

	return [copiedText, copy]
}
