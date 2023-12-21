import { Card, CardTitle } from '@components/card'
import { Button } from '@radix-ui/themes'
import { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const SubmitButton = tw(Button)`
  w-full
`
const Submit = styled(SubmitButton).attrs({
	size: '4',
	type: 'submit',
	value: 'Submit',
})``

const Container = tw(Card)`
	p-6 border-0
`

const HeaderWrap = tw.div`
	mb-10 px-6 flex items-center justify-between
`
const Header = ({ children }: { children: ReactNode }) => (
	<HeaderWrap>
		<Title>Generate Payment Link</Title>
		{children}
	</HeaderWrap>
)

const Title = tw(CardTitle)`
	py-1		
`
const GridContent = tw.div`
	grid grid-cols-2
`

export { Container, GridContent, Submit, Header }
