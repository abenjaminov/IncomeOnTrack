import {useMutation, useQuery, useQueryClient} from 'react-query';
import {baseURL} from '@shared/utils/base-url';
import axios, {AxiosRequestConfig} from 'axios';
import {CacheKeys, LocalStorageKeys} from '../types';

export interface UseApiOptions {
    method?: AxiosRequestConfig['method'];
    cacheKey?: CacheKeys;
    refetchInterval?: number;
}

export interface UseQueryOptions<T> extends UseApiOptions {
    data?: T;
    enabled?: boolean;
}

export interface UseMutationOptions extends UseApiOptions {
    invalidateTags?: Array<CacheKeys>;
}

function getFullUrl(path: string) {
    if(path.startsWith('/')) path = path.slice(1);
    return `${baseURL}/api/${path}`;
}

function getRequestHeaders() {
    const headers: any = {};

    const token = localStorage.getItem(LocalStorageKeys.userToken);

    if (token) headers['authorization'] = `Bearer ${token}`;
    headers['Content-Type'] = 'application/json';

    return headers;
}

export function useApiQuery<TData, TResponse>(path: string, options?: UseQueryOptions<TData>) {
    const url = getFullUrl(path);

    const query = useQuery<unknown, unknown, TResponse, string[]>(
      [options?.cacheKey ?? CacheKeys.default,url, JSON.stringify(options?.data) ?? ''],
      () => {
          return new Promise((resolve, reject) => {
              const axiosConfig: AxiosRequestConfig = {};

              axiosConfig.url = url;
              axiosConfig.method = options?.method ?? 'GET';
              axiosConfig.headers = getRequestHeaders();

              if (options?.data) {
                  axiosConfig.data = options.data;
              }
              axios
                .request(axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        localStorage.removeItem(LocalStorageKeys.userToken);
                        window.location.href = '/login';
                    }

                    return reject(err);
                });
          });
      },
      {
          enabled: options?.enabled,
          suspense: false,
          refetchInterval: options?.refetchInterval
      },
    );

    return query;
}

export const useApiMutation = <TData, TResult = unknown>(path: string, options?: UseMutationOptions) => {
    const queryClient = useQueryClient();
    const url = getFullUrl(path);

    const mutation = useMutation<TResult, unknown, TData>(
      options?.cacheKey ?? url,
      (data?: TData) => {
          return new Promise((resolve, reject) => {
              const axiosConfig: AxiosRequestConfig = {};

              axiosConfig.url = url;
              axiosConfig.method = options?.method ?? 'POST';
              axiosConfig.headers = getRequestHeaders();

              if (data) {
                  axiosConfig.data = data;
              }

              axios
                .request(axiosConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(reject);
          });
      },
      {
          onSuccess: () => {
              if (!options?.invalidateTags) return;

              options.invalidateTags.forEach(x => {
                  queryClient.invalidateQueries(x);
              });
          },
      },
    );

    return {
        fetch: mutation.mutate,
        fetchAsync: mutation.mutateAsync,
        data: mutation.data,
        error: mutation.error,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
        isLoading: mutation.isLoading,
    };
};
