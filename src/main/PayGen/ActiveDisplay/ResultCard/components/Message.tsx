import { ChangeEventHandler } from 'react'
import { MessageArea, MessageWrap } from '../styled'
import { SectionLabel } from '@components/label'
import { Pencil2Icon } from '@radix-ui/react-icons'

export const Message = ({
	onChange,
}: {
	onChange: ChangeEventHandler<HTMLTextAreaElement>
}) => (
	<MessageWrap>
		<SectionLabel label='Custom Message'>
			<Pencil2Icon />
		</SectionLabel>
		<MessageArea onChange={onChange} />
	</MessageWrap>
)
