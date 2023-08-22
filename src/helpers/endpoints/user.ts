import { endpoint } from ".";

export const user = {
    getAllUser: () => `${endpoint.baseUrl}/user`,
    createUser: () => `${endpoint.baseUrl}/user`
}