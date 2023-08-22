import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { Technologies, TechnologiesResponse } from "types/api/technology";

export const TechnologyService = {
    getAll: (): Promise<TechnologiesResponse> =>
    Api(endpoint.getAllTechnologies(), {
        method: "GET",
    }).then((response)=> response.json()),
    create: (technologies: Technologies) =>
    Api(endpoint.createTechnologies(), {
        method: "POST",
        body: JSON.stringify(technologies),
        mode: "cors",
        headers: {
            "Content-Type": "application-json"
        },
    }).then((response) => response.json())
};