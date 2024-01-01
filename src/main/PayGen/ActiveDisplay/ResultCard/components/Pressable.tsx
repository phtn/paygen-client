import { Box, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { Label } from '../styled'
import { Card } from '@components/card'
import tw from 'tailwind-styled-components'
import { CopyIcon } from '@radix-ui/react-icons'

type PressableProps = {
	children?: ReactNode
	content?: string
	label?: string
	onClick: () => void
}

const Pressable = ({ content, label, onClick }: PressableProps) => (
	<Container onClick={onClick}>
		<Flex
			gap={'3'}
			align={'center'}>
			<Box>
				<Label>
					{label}
					<Copy />
				</Label>
				<Value>{content}</Value>
			</Box>
		</Flex>
	</Container>
)

const Container = tw(Card)`
	flex-auto rounded-sm cursor-pointer py-2 px-4 border-0 bg-gradient-to-tr from-indigo-300/80 to-indigo-100
`
const Copy = tw(CopyIcon)`
	mx-3 text-transparent/40
`

const Value = tw.div`
  text-indigo-800 text-[8px] md:text-[13px] items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`

export default Pressable
