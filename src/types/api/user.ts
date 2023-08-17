export interface User {
    name: string;
    nickname: string;
    password: string;
    passwordConfirm: string;
}

export interface UserUpdate {
    user: User;
    id: string;
}

export interface UserResponse {
    id: string;
    name: string;
    nickname: string;
    password: string;
    updateAt?: string;
    createdAt?: string;
}