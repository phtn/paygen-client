import { ResultProps } from './types'
import { useEmailHandler, useActiveControls } from './hooks'
import { Header } from '@components/header'
import { Result } from './styled'
import TopItem from './components/TopItem'
import MidItem from './components/MidItem'
import EmailContent from './components/EmailContent'
import Actions from './components/Actions'

const ResultCard = ({ values }: ResultProps) => {
	const {
		files,
		handleFileChange,
		handleFileRemove,
		handleSendEmail,
		loading,
	} = useEmailHandler()

	const { midProps, topProps } = useActiveControls({ values })

	return (
		<Result>
			<Header title={values.items[0].name || ''} />
			<TopItem {...topProps} />
			<MidItem {...midProps} />

			<EmailContent
				data={files && [...files]}
				onPress={handleFileRemove}
			/>

			<Actions
				fileChange={handleFileChange}
				sendEmail={handleSendEmail}
				loading={loading}
			/>
		</Result>
	)
}
export default ResultCard
