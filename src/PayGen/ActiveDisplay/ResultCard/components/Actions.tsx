import { Loading } from '@components/loading'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { qe } from '@utils/helpers'
import { ChangeEvent } from 'react'
import { ActionsWrap, SendButton } from '../styled'
import { Input } from '@components/input'

type ActionProps = {
	fileChange: (e: ChangeEvent<HTMLInputElement>) => void
	sendEmail: () => void
	loading: boolean
}

const ActiveSend = () => (
	<>
		<span>Send Email</span>
		<PaperPlaneIcon />
	</>
)

const InactiveSend = () => (
	<>
		<span className='text-teal-500'>Sending</span>
		<Loading />
	</>
)

const Actions = ({ fileChange, loading, sendEmail }: ActionProps) => {
	const SendAction = () => {
		const options = qe(<InactiveSend />, <ActiveSend />)
		return (
			<SendButton
				disabled={loading}
				onClick={sendEmail}>
				{options.get(loading)}
			</SendButton>
		)
	}
	return (
		<ActionsWrap>
			<Input
				alt='upload'
				type='file'
				name='upload'
				onChange={fileChange}
				placeholder='Upload Attachment'
				multiple
				className='max-w-[220px] text-[12px]'
			/>
			<SendAction />
		</ActionsWrap>
	)
}

export default Actions
