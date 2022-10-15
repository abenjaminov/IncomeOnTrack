import { IGetSessionArgs, ISession } from "@iot/shared";
import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { baseApiSlice } from "./base-api.slice";

export const sessionApiSlice = baseApiSlice.injectEndpoints({
    endpoints: builder => ({
        getSessions: builder.query<Array<ISession>, IGetSessionArgs>({
            query: (args: IGetSessionArgs) => ({
                method: 'POST',
                url: '/session',
                body: args
            })
        })
    })
})

export const { useGetSessionsQuery } = sessionApiSlice;