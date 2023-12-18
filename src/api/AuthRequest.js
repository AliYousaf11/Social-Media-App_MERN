import axios from "axios"
const Api = axios.create({baseURL:"http://localhost:8080"})

export const login = (formData) => Api.post("/auth/login",formData)
export const Signup = (formData) => Api.post("/auth/register",formData)