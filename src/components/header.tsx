import { ReactNode } from 'react'
import tw from 'tailwind-styled-components'
import { CardTitle } from './card'
import { InfoCircledIcon } from '@radix-ui/react-icons'

type HeaderProps = {
	children?: ReactNode
	title: string
	subtext?: string
}

const Primary = tw.div`
	flex items-end
`

const Wrap = tw.div`
	flex flex-col h-[100px] justify-center
	mb-10 border-b-[0.33px] dark:border-slate-600 border-indigo-300
`

const Title = tw(CardTitle)`
  py-1
`
const Subtext = tw.div`
	flex items-center text-[13px] dark:text-slate-400 text-slate-500 mx-1
`

export const Header = ({ children, subtext, title }: HeaderProps) => (
	<Wrap>
		<Primary>
			<Title>{title}</Title>
			{children}
		</Primary>
		<Subtext>
			<InfoCircledIcon className='mr-1 dark:text-indigo-300 text-indigo-400' />
			{subtext}
		</Subtext>
	</Wrap>
)
