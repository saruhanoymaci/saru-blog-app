import axiosInstance from "./api";
interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterPayload {
  email: string;
  password: string;
  username: string;
  fullName: string;
  birthDate: Date;
  birthPlace: string;
  gender: "male" | "female" | "other";
}

export const authService = {
  login: async (payload: LoginPayload) => {
    const response = await axiosInstance.post("/api/auth/login", payload);
    return response.data;
  },

  register: async (payload: RegisterPayload) => {
    const response = await axiosInstance.post("/api/auth/register", payload);
    return response.data;
  },
  logout: async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};
