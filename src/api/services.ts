import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './httpClient';

const API_URL = 'http://localhost:3001/api'

export const servicesApi = createApi({
	baseQuery: axiosBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers: any) => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	reducerPath: 'generalApiAuth',
	endpoints: (build) => ({
		pets: build.mutation<any, any>({ query: (search) => ({method: 'get', url: `pets/${search}`}) }),
	})
});

const ServicesApi = servicesApi;
export default ServicesApi;