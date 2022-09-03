import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../utils';
import { RootState } from '../types';

export const baseApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}/api/v1`,
    prepareHeaders: (headers, api) => {
      const state = api.getState() as RootState;
      const token = state.auth?.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, unknown>, // TODO : Last type is the api error
  endpoints: () => ({}),
});
