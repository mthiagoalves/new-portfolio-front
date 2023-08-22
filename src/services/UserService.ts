import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { User, UserResponse } from "types/api/user";

export const UserService = {
    getAll: (): Promise<UserResponse> =>
    Api(endpoint.getAllUser(), {
        method: "GET",
    }).then((response)=> response.json()),
    create: (user: User) =>
    Api(endpoint.createUser(), {
        method: "POST",
        body: JSON.stringify(user),
        mode: "cors",
        headers: {
            "Content-Type": "application-json"
        }
    }). then((response) => response.json())
};