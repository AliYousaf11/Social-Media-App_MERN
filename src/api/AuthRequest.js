import axios from "axios"
// const Api = axios.create({baseURL:"http://localhost:8080"})
const Api = axios.create({ baseURL: "https://social-media-app-mern-backend-seven.vercel.app/" })

export const login = (formData) => Api.post("/auth/login", formData)
export const Signup = (formData) => Api.post("/auth/register", formData)