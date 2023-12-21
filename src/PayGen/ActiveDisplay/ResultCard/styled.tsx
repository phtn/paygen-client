import { CardContent, CardFooter } from '@components/card'
import { CopyIcon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { Box, Button, Card, Flex } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { decimal, transformDate } from 'src/utils/helpers'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Result = tw(Card)`
  h-[calc(100vh-375px)] border-teal-900
`

type PressableProps = {
	children?: ReactNode
	content?: string
	label?: string
	onClick: () => void
}

const Label = tw.span`
  text-teal-500 font-bold tracking-tight flex items-center whitespace-nowrap
`
const Content = tw(Flex)`
  text-orange-200 text-[12px] items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis 
`

const Pressable = ({ content, label, onClick }: PressableProps) => (
	<Card
		className='flex-auto '
		variant='surface'
		asChild>
		<button onClick={onClick}>
			<Flex
				gap={'3'}
				align={'center'}>
				<Box>
					<Label>
						{label}
						<CopyIcon className='mx-3 text-orange-300' />
					</Label>
					<Content>{content}</Content>
				</Box>
			</Flex>
		</button>
	</Card>
)

type TopProps = {
	copyInvoiceNum: () => void
	copyInvoiceUrl: () => void
	inv_num: string
	inv_url: string
}

const Top = ({
	inv_num,
	inv_url,
	copyInvoiceNum,
	copyInvoiceUrl,
}: TopProps) => (
	<Flex gap={'3'}>
		<Pressable
			label='Invoice Number'
			content={inv_num}
			onClick={copyInvoiceNum}
		/>

		<Pressable
			label='Payment Link'
			content={inv_url}
			onClick={copyInvoiceUrl}
		/>
	</Flex>
)

type MidProps = {
	copyAmount: () => void
	copyExpiryDate: () => void
	amount: number
	expiry_date: string
}

const Mid = ({ amount, expiry_date, copyAmount, copyExpiryDate }: MidProps) => (
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
			onClick={copyExpiryDate}
		/>
	</Flex>
)

const ContentWrap = tw(CardContent)`
  flex border-[0.24px] border-slate-700 h-[330px] my-3 rounded overflow-y-scroll
`
const FooterWrap = tw(CardFooter)`
  flex justify-between items-center mt-4 w-full
`
const Action = tw(Button)`
  flex items-center
`
const SendButton = styled(Action).attrs({
	size: '2',
	variant: 'soft',
})``

type FooterProps = {
	onClick: () => void
}

const Footer = ({ onClick }: FooterProps) => (
	<FooterWrap>
		<span>Upload Attachment</span>
		<SendButton
			onClick={onClick}
			value=''>
			Send Email
			<PaperPlaneIcon />
		</SendButton>
	</FooterWrap>
)

export { ContentWrap, Footer, Top, Mid, Result }
