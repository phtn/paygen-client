import { Flex } from '@radix-ui/themes'
import Pressable from './Pressable'
import { decimal, transformDate } from '@utils/helpers'

type MidItemProps = {
	copyAmount: () => void
	copyExpiry: () => void
	amount: number
	expiry_date: string
}

export const MidItem = ({
	amount,
	expiry_date,
	copyAmount,
	copyExpiry,
}: MidItemProps) => (
	<Flex
		gap={'3'}
		className='mt-3'>
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
