import { IClient, ILoginArgs } from '@iot/shared';
import { baseApiSlice } from './base-api.slice';

// Define a service using a base URL and expected endpoints
export const clientsApiSlice = baseApiSlice.injectEndpoints({
  endpoints: builder => ({
    getClients: builder.query<Array<IClient>, undefined>({
      query: () => ({
        method: 'POST', 
        url: '/client/get-clients',
        body: {
          includeDebt: true
        }
      }),
    }),
  }),
});
export const { useGetClientsQuery } = clientsApiSlice;
