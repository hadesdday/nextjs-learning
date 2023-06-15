export interface LoginPayload {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    expiredAt: Date;
}

export interface Profile {
    username: string;
    city: string;
    email: string;
}