import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openAiServices = createApi({
	reducerPath: 'openAiApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.openai.com',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
		},
	}),
	endpoints: (builder) => ({
		getGptChat: (body) =>
			builder.query({
				url: '/v1/chat/completions',
				method: 'POST',
				body: {
					model: body?.model || 'gpt-3.5-turbo',
					messages: body.messages,
				},
			}),
	}),
});

export default openAiServices;
