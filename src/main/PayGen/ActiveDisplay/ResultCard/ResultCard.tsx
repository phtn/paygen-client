import { type ResultProps } from './types'
import { useEmailHandler, useActiveControls } from './hooks'
import { Result } from './styled'
import { TopItem } from './components/TopItem'
import { MidItem } from './components/MidItem'
import { EmailContent } from './components/EmailContent'
import { Actions } from './components/Actions'
import { Title } from './components/Title'
import { TextAlignRightIcon } from '@radix-ui/react-icons'

export const ResultCard = ({ values, recipient }: ResultProps) => {
	const {
		files,
		handleFileChange,
		handleFileRemove,
		handleMessageChange,
		handleSendEmail,
		loading,
	} = useEmailHandler({ values, recipient })

	const { midProps, topProps, titleProps } = useActiveControls({ values })

	return (
		<Result>
			<Title titleProps={titleProps} />
			<div className='text-[12px] mb-2 flex items-center'>
				<TextAlignRightIcon className='text-slate-400 mr-1' /> Details
			</div>
			<TopItem {...topProps} />
			<MidItem {...midProps} />

			<EmailContent
				data={files && [...files]}
				fileRemove={handleFileRemove}
				messageChange={handleMessageChange}
			/>

			<Actions
				fileChange={handleFileChange}
				sendEmail={handleSendEmail}
				loading={loading}
			/>
		</Result>
	)
}
