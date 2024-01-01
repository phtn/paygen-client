import { Card, CardFooter, Card as Display } from '@components/card'
import { TextArea } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const ResultWrap = tw(Display)`
  border-0 h-fit overflow-hidden bg-transparent
`
const Result = styled(ResultWrap)``

const Label = tw.span`
  text-indigo-950 text-[10px] md:text-[0.85rem] font-bold tracking-tight flex items-center whitespace-nowrap
`

const EmailWrap = tw(Card)`
  border-0 h-fit my-3 rounded-md overflow-y-scroll 
  grid grid-cols-3 gap-4
`
const TextAreaComponent = tw(TextArea)`
  h-[300px]
`
const MessageArea = styled(TextAreaComponent).attrs({
	name: 'message',
	placeholder: 'Write a custom message to include in the email. (Optional)',
	resize: true,
})``

const MessageWrap = tw.div`
  col-span-2
`
const Uploads = tw.div`
  border-0 border-slate-700 rounded
  overflow-y-scroll
`

const ActionsWrap = tw(CardFooter)`
  flex justify-between items-center mt-4 w-full
`

export {
	ActionsWrap,
	EmailWrap,
	Label,
	Result,
	MessageArea,
	MessageWrap,
	Uploads,
}
