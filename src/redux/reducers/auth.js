const dataLogin = {
    token: null,
    user: null,
    isError: false,
    isLoading: false,
    isAuthenticated: false,
    errMessage: null
}

const auth = (state = dataLogin, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            {
                state.isLoading = true
                return {...state }
            }
        case 'LOGIN_FULFILLED':
            {
                const { data } = action.payload
                state.token = data.results.token
                state.isLoading = false
                state.isError = false
                window.localStorage.setItem('token', state.token)
                state.isAuthenticated = true
                return {...state }
            }
        case 'LOGIN_REJECTED':
            {
                const { data } = action.payload.response
                state.isLoading = false
                state.isError = true
                state.errMessage = data.message
                return {...state }
            }
        case 'LOGIN_PROFILE_PENDING':
            {
                state.isLoading = true
                return {...state }
            }
        case 'LOGIN_PROFILE_FULFILLED':
            {
                const { data } = action.payload
                state.isLoading = false
                state.user = data.results
                return {...state }
            }
        case 'LOGOUT':
            {
                state.token = null
                window.localStorage.removeItem('token')
                state.isAuthenticated = false
                return {...state }
            }
        default:
            {
                return {...state }
            }
    }
}

export default auth