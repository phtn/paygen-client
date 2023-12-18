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
	'Access-Control-Allow-Methods': 'POST',
}
export const paymentConfig = {
	method: 'POST',
	headers,
}

export const retrieveConfig = {
	method: 'GET',
	headers,
}
