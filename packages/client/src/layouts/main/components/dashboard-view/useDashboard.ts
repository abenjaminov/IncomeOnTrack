import {useApiQuery} from "@shared/hooks/useApi";
import {IGraph} from "@income-on-track/shared";
import {CacheKeys} from "@shared/types";

export const useDashboard = () => {
  const { data: lastTwelveMonthsGraph } = useApiQuery<void, IGraph>('sessions/twelve-month-sum', {
    method: 'GET',
    cacheKey: CacheKeys.sessions,
  })

  return {
    lastTwelveMonthsGraph
  }
}
