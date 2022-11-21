export interface LoginResponse {
  user: {
    username: string;
    email: string;
    role: "ROLE_USER" | "ROLE_ADMIN";
    isEnabled: boolean;
  };
  accessToken: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
