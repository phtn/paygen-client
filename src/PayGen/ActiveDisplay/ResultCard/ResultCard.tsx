import { useCopy } from 'src/utils/hooks'
import { ResultProps } from './types'
import { ContentWrap, Footer, Top, Result, Mid } from './styled'

const ResultCard = ({ values }: ResultProps) => {
	const { amount, expiry_date, external_id, invoice_url } = values
	const [_, copy] = useCopy()

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

			<ContentWrap>
				<pre>{JSON.stringify(values, null, 2)}</pre>
			</ContentWrap>
			<Footer onClick={() => null} />
		</Result>
	)
}
export default ResultCard
