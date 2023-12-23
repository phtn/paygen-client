import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { CardTitle } from './card'

type HeaderProps = {
	children?: ReactNode
	title: string
}

const Wrap = tw.div`
	flex items-center justify-between
  mb-4
`

const Title = tw(CardTitle)`
  py-1
`

export const Header = ({ children, title }: HeaderProps) => (
	<Wrap>
		<Title>{title}</Title>
		{children}
	</Wrap>
)
