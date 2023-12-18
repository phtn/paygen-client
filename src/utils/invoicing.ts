import { v4 as uuidv4 } from 'uuid'

export const createInvoiceNumber = () => {
	const regex = /-(.*)-/
	const uid = uuidv4()

	const match = uid.match(regex)
	if (match && match.length > 1) {
		const stringBetweenDashes = match[1]
		const inv_id = `INV-${stringBetweenDashes}`
		return inv_id
	} else {
		const inv_id = `INV-${uid.substring(0, 13)}`
		return inv_id
	}
}
