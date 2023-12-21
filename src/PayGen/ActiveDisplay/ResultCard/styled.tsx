import { CardContent, CardFooter } from '@components/card'
import { Input } from '@components/input'
import { CopyIcon, Cross2Icon, PaperPlaneIcon } from '@radix-ui/react-icons'
import { Box, Button, Card, Flex, IconButton, TextArea } from '@radix-ui/themes'
import { ChangeEvent, ReactNode } from 'react'
import { decimal, extractFileType, transformDate } from 'src/utils/helpers'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Result = tw(Card)`
  h-[calc(100vh-375px)] overflow-hidden bg-transparent rounded-xl
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

const EmailWrap = tw(CardContent)`
  border-[0.24px] border-slate-700 h-[245px] 
  p-1 my-3 rounded-md overflow-y-scroll 
  grid grid-cols-3 gap-1
`
const TextMessage = tw(TextArea)`
  col-span-2 rounded
`
const Uploads = tw.div`
  border-[0.24px] border-slate-700 rounded 
  overflow-y-scroll
`
const FileName = tw.div`
  text-teal-500 text-[14px] font-bold 
  tracking-tight flex items-center justify-between 
  whitespace-nowrap max-w-[200px] overflow-x-scroll
`
const FName = tw.div`
  max-w-[175px] overflow-x-scroll
`
const FileType = tw.div`
  uppercase text-slate-500 ml-3
`

type FileItemProps = {
	file: File
	index: number
	onRemove: (index: number) => void
}
const FileItem = ({ file, index, onRemove }: FileItemProps) => (
	<Card
		className='flex'
		variant='classic'>
		<Box>
			<FileName>
				<FName>{file.name}</FName>
				<IconButton
					variant='outline'
					size={'1'}
					onClick={() => onRemove(index)}>
					<Cross2Icon className='text-orange-300' />
				</IconButton>
			</FileName>
			<Content>
				{Math.round(file.size / 1000)}kb{' '}
				<FileType>{extractFileType(file.type)}</FileType>
			</Content>
		</Box>
	</Card>
)

type EmailContentProps = {
	attachments: ReactNode
}
const EmailContent = ({ attachments }: EmailContentProps) => (
	<EmailWrap>
		<TextMessage placeholder='Write a custom message to include in the email.' />
		<Uploads>{attachments}</Uploads>
	</EmailWrap>
)

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
	sendEmail: () => void
	fileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Footer = ({ fileChange, sendEmail }: FooterProps) => {
	return (
		<FooterWrap>
			<Input
				alt='upload'
				type='file'
				name='upload'
				onChange={fileChange}
				placeholder='Upload Attachment'
				multiple
				className='max-w-[220px] text-[12px]'
			/>
			<SendButton
				onClick={sendEmail}
				value=''>
				Send Email
				<PaperPlaneIcon />
			</SendButton>
		</FooterWrap>
	)
}

export { EmailContent, FileItem, Footer, Top, Mid, Result }
