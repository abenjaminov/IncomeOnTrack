import {IClientView, IGetClientsResult} from "@income-on-track/shared";
import {useApiQuery} from "@shared/hooks/useApi";
import {CacheKeys} from "@shared/types";

export const useClients = () => {
  const { data , isLoading} = useApiQuery<IGetClientsResult>('clients/get', {
    method: 'POST',
    cacheKey: CacheKeys.clients
  })

  const clients = data?.clients ?? [];
  const count = data?.count ?? 0;

  return {
    clients,
    count,
    isLoading
  }
}
