import { type ResultProps } from './types'
import { useEmailHandler, useActiveControls } from './hooks'
import { Header } from '@components/header'
import { Result } from './styled'
import { TopItem } from './components/TopItem'
import { MidItem } from './components/MidItem'
import { EmailContent } from './components/EmailContent'
import { Actions } from './components/Actions'

export const ResultCard = ({ values, recipient }: ResultProps) => {
	const {
		files,
		handleFileChange,
		handleFileRemove,
		handleMessageChange,
		handleSendEmail,
		loading,
	} = useEmailHandler({ values, recipient })

	const { midProps, topProps } = useActiveControls({ values })

	return (
		<Result>
			<Header title={values.items[0].name || ''} />
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
