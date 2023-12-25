import { Box, Card, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { Content, Copy, Label } from '../styled'

type PressableProps = {
	children?: ReactNode
	content?: string
	label?: string
	onClick: () => void
}

const Pressable = ({ content, label, onClick }: PressableProps) => (
	<Card
		className='flex-auto article'
		variant='surface'
		asChild>
		<button onClick={onClick}>
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
		</button>
	</Card>
)

export default Pressable
