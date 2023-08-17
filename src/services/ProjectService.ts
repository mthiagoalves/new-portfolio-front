import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { ProjectResponse } from "types/api/project";

export const ProjectService = {
    getAll: (): Promise<ProjectResponse> =>
    Api(endpoint.getAllProject(), {
        method: "GET",
    }).then((response)=> response.json())
};