import {useApiQuery} from "@shared/hooks/useApi";
import {IGetSessionArgs, IGetSessionsResult} from "@income-on-track/shared";
import {CacheKeys} from "@shared/types";

export const useSessions = () => {
  const { data , isLoading} = useApiQuery<IGetSessionArgs, IGetSessionsResult>('sessions/get', {
    method: 'POST',
    cacheKey: CacheKeys.sessions
  })

  const sessions = data?.sessions ?? [];
  const count = data?.count ?? 0;

  sessions.forEach(x => x.date = new Date(x.date));

  return {
    sessions,
    count,
    isLoading
  }
}
