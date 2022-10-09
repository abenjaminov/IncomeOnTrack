import { ICreateClientArgs } from "@iot/shared";
import React from "react";
import { useCreateOrUpdateClientMutation, useGetClientsQuery } from "../api"

export const useClients = () => {
    const {data: clients} = useGetClientsQuery(undefined)

    const [ createOrUpdateClient, {isLoading: isCreateOrUpdateSuccess} ] = useCreateOrUpdateClientMutation();

    const createOrUpdate = React.useCallback((args: ICreateClientArgs) => {
        createOrUpdateClient(args);
    }, [])

    return {
        clients,
        createOrUpdate,
        isCreateOrUpdateSuccess
    }
}