import { authApi } from "@/api-client";
import { StorageKeys } from "@/constants";
import { LoginPayload, Profile } from "@/models";
import useSWR from "swr";
import { SWRConfiguration } from "swr/_internal/dist";

function getUserInfo(): Profile | null {
    try {
        return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || '');
    } catch (error) {
        // console.log("failed parse user info", error);
        return null;
    }
}

export function useAuth(options?: Partial<SWRConfiguration>) {
    const configurations: SWRConfiguration = {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options,
        fallbackData: getUserInfo(),
        onSuccess(data, key, config) {
            //save user infor to local storage
            localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data))
        },
        onError(err, key, config) {
            //failed to get profile -> logout
            console.log(err) // send error log to server if any
            localStorage.removeItem(StorageKeys.USER_INFO)
            logout();
        },
    };

    //profile
    const { data: profile, error, mutate } = useSWR<Profile | null>('/profile', configurations);

    const firstLoading = profile === undefined && error === undefined;

    async function login(payload: LoginPayload) {
        await authApi.login(payload);
        await mutate();
    }

    async function logout() {
        await authApi.logout();
        mutate(null, false);
        localStorage.removeItem(StorageKeys.USER_INFO)
    }

    return {
        profile,
        error,
        login,
        logout,
        firstLoading
    }
}