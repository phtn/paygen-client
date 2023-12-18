import { AccountResponseResource } from 'src/sources/account'
import { createAxiosInstance, retrieveConfig as config } from 'src/utils/axios'

const getCustomer = async (id: string) => {
	const axiosInstance = createAxiosInstance(config)
	const response = await axiosInstance.get<{ data: AccountResponseResource }>(
		`/v1/customer/:${id}`
	)
	return response.data
}
export default getCustomer
