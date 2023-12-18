import * as AuthApi from "../api/AuthRequest"

export const login = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.login(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "AUTH_FAIL", error: error?.response?.data?.message || error?.message })
    }
}

export const Signup = (formData) => async (dispatch) => {
    dispatch({ type: "AUTH_START" })
    try {
        const { data } = await AuthApi.Signup(formData)
        dispatch({ type: "AUTH_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "AUTH_FAIL", error: error?.response?.data?.message || error?.message })
    }
}