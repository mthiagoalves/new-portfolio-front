import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { TechnologiesResponse } from "types/api/technology";

export const TechnologyService = {
    getAll: (): Promise<TechnologiesResponse> =>
    Api(endpoint.getAllTechnologies(), {
        method: "GET",
    }).then((response)=> response.json())
};