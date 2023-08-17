import { Auth } from "helpers/Auth";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { LocalStorageKeys } from "types/LocalStorageKeys";

type args = [input: RequestInfo, init?: RequestInit | undefined];

function requestInterceptor(config: RequestInit | undefined) {
    if (config) {
        const token = {
            'authorization': `Bearer${LocalStorageHelper.get(LocalStorageKeys.TOKEN)}`,
        }
        config.headers = { ...config.headers, ...token }
    }
}

function responseInterceptor(res: Response) {
    if (res.status === 401) {
        Auth.Logout();
    }
}

export const Api = async (...args: args): Promise<Response> => {
    let [url, config] = args;
    requestInterceptor(config);
    const response = await fetch(url, config);
    responseInterceptor(response);

    return response;

}