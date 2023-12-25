import { Button } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const SubmitButton = tw(Button)`
  w-full mt-[24px]
`

const Submit = styled(SubmitButton).attrs({
	size: '4',
	type: 'submit',
})``

const Label = tw.span`
  font-bold
`

export { Submit, Label }
