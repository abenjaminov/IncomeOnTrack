import { ILoginArgs } from '@iot/shared';
import { baseApiSlice } from './base-api.slice';

// Define a service using a base URL and expected endpoints
export const authApiSlice = baseApiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation<string, ILoginArgs>({
      query: (payload: ILoginArgs) => ({
        method: 'POST',
        url: '/auth/login',
        body: payload,
      }),
    }),
    getMe: builder.query<string, void>({
      query: () => ({ url: '/auth/me' }),
    }),
  }),
});
export const { useLoginUserMutation, useGetMeQuery } = authApiSlice;
