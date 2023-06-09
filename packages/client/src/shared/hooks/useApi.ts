import { useQuery, useMutation } from 'react-query'

export const useApiQuery = (url: string) => {
    const { data, isLoading, error } = useQuery(url, () => fetch(url).then((res) => res.json()))

    return { data, isLoading, error }
}

export const useApiMutation = (url: string) => {
    const { mutate, isLoading, error } = useMutation((data: any) => fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => res.json()))

    return { mutate, isLoading, error }
}
