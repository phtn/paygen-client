import { Button } from '@radix-ui/themes'
import { qe } from '@utils/helpers'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { Loading } from './loading'

const SubmitButton = tw(Button)`
  w-full mt-[24px]
`

const Submit = styled(SubmitButton).attrs<{ width?: number }>({
	size: '4',
	type: 'submit',
})`
	width: ${({ width }) => width}px;
`

const InactiveLabel = tw.span`
  text-teal-500 font-bold
`
type SubmitProps = {
	label: string
}

const ActiveSubmit = ({ label }: SubmitProps) => (
	<>
		<span>{label}</span>
	</>
)

const InactiveSubmit = ({ label }: SubmitProps) => (
	<>
		<InactiveLabel>{label}</InactiveLabel>
		<Loading />
	</>
)

type SubmitActionProps = {
	activeLabel: string
	inactiveLabel: string
	isValid?: boolean
	loading: boolean
	onClick?: (param?: any) => void
	width?: number
}

const SubmitAction = ({
	activeLabel,
	inactiveLabel,
	isValid,
	loading,
	onClick,
	width,
}: SubmitActionProps) => {
	const options = qe(
		<InactiveSubmit label={inactiveLabel} />,
		<ActiveSubmit label={activeLabel} />
	)
	return (
		<Submit
			width={width}
			disabled={loading || !isValid}
			onClick={onClick}>
			{options.get(loading)}
		</Submit>
	)
}

export { SubmitAction }
