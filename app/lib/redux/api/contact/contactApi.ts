import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eskalate-backend-ij7jnmwh2q-zf.a.run.app',
        // mode: 'no-cors'
    }),
    tagTypes: ['Developer', 'Education', 'Project', 'Experience', 'Skill'],
    endpoints: (builder) => ({
        contactUs: builder.mutation<any, any>({
            query: (body) => ({
                url: `v1/contact/sendEmail`,
                method: 'POST',
                body
            })
        })
    })
});

export const { useContactUsMutation } = contactApi;
