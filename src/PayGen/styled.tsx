import { Card, CardTitle } from '@components/card'
import { Button } from '@radix-ui/themes'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const SubmitButton = tw(Button)`
  w-full
`
const Submit = styled(SubmitButton).attrs<{
	isValid: boolean
	loading: boolean
}>((p) => ({
	disabled: !p.isValid || p.loading,
	size: '4',
	type: 'submit',
	value: 'Submit',
}))``

const Container = tw(Card)`
	p-6 border-0
`

const TitleContainer = tw.div`
mb-10 px-6 flex items-center justify-between
`
const Title = tw(CardTitle)`
	
`
const GridContent = tw.div`
	grid grid-cols-2
`

export { Container, GridContent, Submit, Title, TitleContainer }
