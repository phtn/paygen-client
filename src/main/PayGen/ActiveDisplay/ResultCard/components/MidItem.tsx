import { Flex } from '@radix-ui/themes'
import Pressable from './Pressable'

type MidItemProps = {
	copyInvUrl: () => void
	invoice_url: string
}

export const MidItem = ({ invoice_url, copyInvUrl }: MidItemProps) => (
	<Flex
		gap={'3'}
		className='mt-3'>
		<Pressable
			label='Payment Link'
			content={invoice_url}
			onClick={copyInvUrl}
		/>
	</Flex>
)
