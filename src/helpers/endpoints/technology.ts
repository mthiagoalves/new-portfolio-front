import { endpoint } from ".";

export const technology = {
    getAllTechnologies: () => `${endpoint.baseUrl}/technologies`,
    createTechnologies: () => `${endpoint.baseUrl}/technologies`
}