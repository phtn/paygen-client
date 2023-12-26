import { ChangeEvent } from 'react'
import { ActionsWrap } from '../styled'
import { Input } from '@components/input'
import { SubmitAction } from '@components/submit'

type ActionProps = {
	fileChange: (e: ChangeEvent<HTMLInputElement>) => void
	sendEmail: () => void
	loading: boolean
}

const Actions = ({ fileChange, loading, sendEmail }: ActionProps) => {
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
			<SubmitAction
				activeLabel='Send Email'
				inactiveLabel='Sending'
				isValid={true}
				loading={loading}
				onClick={sendEmail}
				width={150}
			/>
		</ActionsWrap>
	)
}

export default Actions
