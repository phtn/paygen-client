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
  text-teal-500 font-bold tracking-tight flex items-center whitespace-nowrap
`
const Content = tw(Flex)`
  text-slate-500 text-[12px] items-center whitespace-nowrap grow-0 overflow-x-auto text-ellipsis
`
const Copy = tw(CopyIcon)`
	mx-3 text-orange-400
`

const EmailWrap = tw(CardContent)`
  border-[0.24px] border-slate-700 h-[245px] 
  p-1 my-3 rounded-md overflow-y-scroll 
  grid grid-cols-3 gap-1
`
const TextMessage = tw(TextArea)`
  col-span-2 rounded
`
const Uploads = tw.div`
  border-0 border-slate-700 rounded
  overflow-y-scroll
`
const FileNameWrap = tw.div`
  text-teal-500 text-[14px] font-bold
  tracking-tight flex items-center justify-between 
  whitespace-nowrap max-w-[200px] overflow-x-scroll
`
const FileName = tw.div`
  max-w-[175px] overflow-x-scroll
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
	FileType,
	Label,
	Result,
	TextMessage,
	Uploads,
}
