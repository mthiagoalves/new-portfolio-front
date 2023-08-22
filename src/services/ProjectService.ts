import { endpoint } from "helpers/endpoints";
import { Api } from "helpers/endpoints/Api";
import { Project, ProjectResponse } from "types/api/project";

export const ProjectService = {
    getAll: (): Promise<ProjectResponse> =>
    Api(endpoint.getAllProject(), {
        method: "GET",
    }).then((response)=> response.json()),
    create: (project: Project) =>
    Api(endpoint.createProject(), {
        method: "POST",
        body: JSON.stringify(project),
        mode: "cors",
        headers: {
            "Content-Type": "application-json"
        }
    }).then((response) => response.json())
};