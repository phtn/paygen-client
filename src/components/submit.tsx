import { qe } from '@utils/helpers'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { Loading } from './loading'
import { Variant } from './variant'

const SubmitButton = tw(Variant)`
  w-full mt-[24px]
`

const Submit = styled(SubmitButton).attrs<{ width?: number }>({
	type: 'submit',
	size: 'lg',
})`
	width: ${({ width }) => width}px;
`

const InactiveLabel = tw.span`
  text-indigo-100 font-bold mr-3
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
			disabled={loading || isValid === false}
			onClick={onClick}>
			{options.get(loading)}
		</Submit>
	)
}

export { SubmitAction }
