import {IGetClientsArgs, IGetClientsResult} from "@income-on-track/shared";
import {useApiQuery} from "@shared/hooks/useApi";
import {CacheKeys} from "@shared/types";

export const useFilteredClients = (filter?: IGetClientsArgs) => {
  const { data , isLoading} = useApiQuery<IGetClientsArgs, IGetClientsResult>('clients/get', {
    method: 'POST',
    cacheKey: CacheKeys.clients,
    data: filter
  })

  const clients = data?.clients ?? [];
  const count = data?.count ?? 0;

  return {
    clients,
    count,
    isLoading
  }
}
