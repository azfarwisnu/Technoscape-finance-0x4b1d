export const getLogin = (login) => {
    return(dispatch) => {
        dispatch({
            type: "GET_LOGIN",
            data: login
        })
    }
}