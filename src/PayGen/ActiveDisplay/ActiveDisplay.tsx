import { Button } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { PaymentResponse } from 'src/sources/payment'

type CustomerData = {
	data: PaymentResponse
}
const ActiveDisplay = ({ data }: CustomerData) => {
	const [invoiceURL, setInvoiceURL] = useState('')
	const [details, setDetails] = useState<PaymentResponse>()

	useEffect(() => {
		// const { invoice_url, external_id, id } = data
		const values = Object.values(data)[0]
		setInvoiceURL(values.invoice_url)
		setDetails(values)
	}, [data])
	return (
		<div className='border-[0px] border-slate-600 rounded-lg p-6 bg-[url("/meteor.svg")] bg-cover items-center justify-center flex'>
			{/* <code className='text-[12px]'>{JSON.stringify(data)}</code> */}
			<div className='w-full items-center justify-between border h-[300px]'>
				<Button size={'3'}>{invoiceURL}</Button>
				<Button
					variant='soft'
					size={'3'}>
					Invoice Number: {details?.external_id}
				</Button>
			</div>
			<span className='bg-teal-500 h-14 rounded text-[1rem]'></span>
		</div>
	)
}
export default ActiveDisplay
