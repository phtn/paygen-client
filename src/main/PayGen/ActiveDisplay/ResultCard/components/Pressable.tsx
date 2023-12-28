import { Box, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { Content, Copy, Label } from '../styled'
import { Card } from '@components/card'

type PressableProps = {
	children?: ReactNode
	content?: string
	label?: string
	onClick: () => void
}

const Pressable = ({ content, label, onClick }: PressableProps) => (
	<Card
		className='flex-auto article cursor-pointer py-2 px-4 border-0 bg-gradient-to-tr from-indigo-400 to-orange-50'
		onClick={onClick}>
		<Flex
			gap={'3'}
			align={'center'}>
			<Box>
				<Label>
					{label}
					<Copy />
				</Label>
				<Content>{content}</Content>
			</Box>
		</Flex>
	</Card>
)

export default Pressable
