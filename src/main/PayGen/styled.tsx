import { Card } from '@components/card'
import tw from 'tailwind-styled-components'

const Container = tw(Card)`
	md:p-6 border-0
`

const GridContent = tw.div`
	md:grid grid-cols-5 gap-x-14
`

export { Container, GridContent }
