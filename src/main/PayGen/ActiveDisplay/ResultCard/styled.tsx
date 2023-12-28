import { CardContent, CardFooter, Card as Display } from '@components/card'
import { CopyIcon } from '@radix-ui/react-icons'
import { Flex, TextArea } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const ResultWrap = tw(Display)`
  border-0 h-fit overflow-hidden bg-transparent
`
const Result = styled(ResultWrap)``

const Label = tw.span`
  text-indigo-800 text-[10px] md:text-[0.90rem] font-bold tracking-tight flex items-center whitespace-nowrap
`
const Content = tw(Flex)`
  text-slate-800 text-[8px] md:text-[13px] items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`
const Copy = tw(CopyIcon)`
	mx-3 dark:text-orange-600 text-orange-400
`

const EmailWrap = tw(CardContent)`
  border-[0.24px] border-slate-700 h-[245px] 
  p-1 my-3 rounded-md overflow-y-scroll 
  grid grid-cols-3 gap-1
`
const TextAreaComponent = tw(TextArea)`
  col-span-2 rounded
`
const MessageArea = styled(TextAreaComponent).attrs({
	name: 'message',
	placeholder: 'Write a custom message to include in the email. (Optional)',
})``

const Uploads = tw.div`
  border-0 border-slate-700 rounded
  overflow-y-scroll
`
const FileNameWrap = tw.div`
  text-teal-500 text-[14px] font-bold
  tracking-tight flex items-center justify-between 
`
const FileName = tw.div`
  flex flex-wrap max-w-[220px] overflow-x-scroll
`

const FileSize = tw.div`
  text-slate-400
`
const FileType = tw.div`
  uppercase text-slate-500 ml-3
`

const ActionsWrap = tw(CardFooter)`
  flex justify-between items-center mt-4 w-full
`

export {
	ActionsWrap,
	Content,
	Copy,
	EmailWrap,
	FileName,
	FileNameWrap,
	FileSize,
	FileType,
	Label,
	Result,
	MessageArea,
	Uploads,
}
