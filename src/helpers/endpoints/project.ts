import { endpoint } from ".";

export const project = {
    getAllProject: () => `${endpoint.baseUrl}/project`,
    createProject: () => `${endpoint.baseUrl}/project` 
}