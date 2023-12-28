import { Flex } from '@radix-ui/themes'
import Pressable from './Pressable'
import { decimal, transformDate } from '@utils/helpers'

type TopProps = {
	amount: number
	expiry_date: string
	external_id: string
	copyAmount: () => void
	copyExpiry: () => void
	copyInvNum: () => void
}

export const TopItem = ({
	amount,
	expiry_date,
	external_id,
	copyAmount,
	copyExpiry,
	copyInvNum,
}: TopProps) => (
	<Flex gap={'3'}>
		<Pressable
			label='Invoice Number'
			content={external_id}
			onClick={copyInvNum}
		/>
		<Pressable
			label='Total Amount'
			content={decimal(amount, 2)}
			onClick={copyAmount}
		/>
		<Pressable
			label='Expiry Date'
			content={transformDate(expiry_date)}
			onClick={copyExpiry}
		/>
	</Flex>
)
