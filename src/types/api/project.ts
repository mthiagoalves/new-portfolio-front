export interface Project {
    title: string;
    slug: string;
    smallDescription: string;
    description: string;
    order: number;
}

export interface ProjectUpdate {
    project: Project;
    id: string;
}

export interface ProjectResponse {
    id: string;
    title: string;
    slug: string;
    smallDescription: string;
    description: string;
    order: number;
    updateAt?: string;
    createdAt?: string;
}