import { ChangeEvent } from 'react'
import { EmailWrap } from '../styled'
import { Message } from './Message'
import { Attachments } from './Attachments'

type EmailContentProps = {
	data: File[] | null
	fileRemove: (index: number) => void
	messageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const EmailContent = ({
	data,
	fileRemove,
	messageChange,
}: EmailContentProps) => {
	return (
		<EmailWrap>
			<Message onChange={messageChange} />
			<Attachments
				data={data}
				fileRemove={fileRemove}
			/>
		</EmailWrap>
	)
}
