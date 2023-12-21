import axios, { AxiosRequestConfig } from 'axios'

export const createAxiosInstance = (config?: AxiosRequestConfig) =>
	axios.create({
		...config,
		headers: {
			common: {
				Accept: '*/*',
				'Content-Type': 'application/json',
				...config?.headers,
			},
		},
	})

const headers = {
	Accept: '*/*',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Origin': 'http://localhost:5173',
}
export const paymentConfig = {
	method: 'POST',
	headers,
}

export const retrieveConfig = {
	method: 'GET',
	headers,
}

const statusConfig = {
	method: 'GET',
	headers,
}

export const serverStatus = async () => {
	const axiosInstance = createAxiosInstance(statusConfig)
	try {
		const data = await axiosInstance.head<any>(
			'http://localhost:4000',
			statusConfig
		)
		return data
	} catch (err) {
		return err
	}
}
