import { Flex } from '@radix-ui/themes'
import Pressable from './Pressable'

type TopProps = {
	copyInvNum: () => void
	copyInvUrl: () => void
	external_id: string
	invoice_url: string
}

export const TopItem = ({
	external_id,
	invoice_url,
	copyInvNum,
	copyInvUrl,
}: TopProps) => (
	<Flex gap={'3'}>
		<Pressable
			label='Invoice Number'
			content={external_id}
			onClick={copyInvNum}
		/>

		<Pressable
			label='Payment Link'
			content={invoice_url}
			onClick={copyInvUrl}
		/>
	</Flex>
)
