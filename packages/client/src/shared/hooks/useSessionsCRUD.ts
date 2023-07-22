import {useApiMutation} from "@shared/hooks/useApi";
import {ICreateSessionArgs} from "@income-on-track/shared";
import {CacheKeys} from "@shared/types";

export const useSessionsCRUD = () => {
  const { fetchAsync: createOrUpdateSession } = useApiMutation<ICreateSessionArgs, unknown>('sessions', {
    method: 'POST',
    invalidateTags: [CacheKeys.sessions, CacheKeys.calendar],
  })

  return {
    createOrUpdateSession
  }
}
