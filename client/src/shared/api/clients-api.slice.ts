import { IClient, ICreateClientArgs, ILoginArgs } from '@iot/shared';
import { ValidationTags } from '../types';
import { baseApiSlice } from './base-api.slice';

// Define a service using a base URL and expected endpoints
export const clientsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: builder => ({
    getClients: builder.query<Array<IClient>, undefined>({
      providesTags: [ValidationTags.clients],
      query: () => ({
        method: 'POST', 
        url: '/client/get-clients',
        body: {
          includeDebt: true
        }
      }),
    }),
    createOrUpdateClient: builder.mutation<unknown, ICreateClientArgs>({
      invalidatesTags: [ValidationTags.clients],
      query: (body: ICreateClientArgs) => ({
        method: 'PUT',
        url: '/client',
        body
      })
    })
  }),
});
export const { useGetClientsQuery, useCreateOrUpdateClientMutation } = clientsApiSlice;
