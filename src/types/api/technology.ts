export interface Technologies{
    name: string;
    slug: string;
    level: string;
}

export interface TechnologiesResponse{
    id: string;
    name: string;
    slug: string;
    level: string;
    updateAt?: string;
    createdAt?: string;
}