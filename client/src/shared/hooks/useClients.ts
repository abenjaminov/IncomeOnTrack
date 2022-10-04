import { useGetClientsQuery } from "../api"

export const useClients = () => {
    const {data: clients} = useGetClientsQuery(undefined)

    return {
        clients
    }
}