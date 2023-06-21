import { workApi } from "@/api-client";
import { QueryKeys } from "@/constants";
import { ListParams } from "@/models";
import useSWR, { SWRConfiguration } from "swr";

export interface UseWorkListProps {
    params: Partial<ListParams>
    options?: SWRConfiguration
}
export function useWorkList({ params, options }: UseWorkListProps) {
    const swrResponse = useSWR([QueryKeys.GET_WORK_LIST, params], () => workApi.getAll(params),
        {
            dedupingInterval: 30 * 1000,
            fallbackData: {
                data: [],
                pagination: {
                    _page: 1,
                    _limit: 10,
                    _totalRows: 0
                }
            },
            keepPreviousData: true,
            ...options
        })


    return swrResponse;
}