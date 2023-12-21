import { useCopy } from 'src/utils/hooks'
import { ResultProps } from './types'
import { EmailContent, Footer, Top, Result, Mid, FileItem } from './styled'
import { useAttachmentHandler } from './hooks'

const ResultCard = ({ values }: ResultProps) => {
	const { amount, expiry_date, external_id, invoice_url } = values
	const [_, copy] = useCopy()
	const { files, handleFileChange, handleFileRemove } = useAttachmentHandler()

	const handleCopyInvUrl = () => {
		copy({ name: 'Payment Link', text: invoice_url as string })
	}
	const handleCopyInvNum = () => {
		copy({ name: 'Invoice Number', text: external_id as string })
	}

	const handleCopyAmount = () => {
		copy({ name: 'Total Amount', text: invoice_url as string })
	}
	const handleCopyExpiryDate = () => {
		copy({ name: 'Expiry Date', text: external_id as string })
	}

	const handleSendEmail = () => {
		return null
	}

	return (
		<Result>
			<Top
				inv_num={external_id}
				inv_url={invoice_url}
				copyInvoiceNum={handleCopyInvNum}
				copyInvoiceUrl={handleCopyInvUrl}
			/>

			<Mid
				amount={amount}
				expiry_date={expiry_date}
				copyAmount={handleCopyAmount}
				copyExpiryDate={handleCopyExpiryDate}
			/>

			<EmailContent
				attachments={
					files
						? [...files].map((file, index) => (
								<FileItem
									index={index}
									file={file}
									key={file.name}
									onRemove={handleFileRemove}
								/>
						  ))
						: null
				}
			/>

			<Footer
				sendEmail={handleSendEmail}
				fileChange={handleFileChange}
			/>
		</Result>
	)
}
export default ResultCard
