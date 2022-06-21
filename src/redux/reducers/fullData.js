const init_state = {
    loginStatus: true,
}

const reducer = (state = init_state, action) => {
    switch(action.type) {
        case "GET_LOGIN":
            return {...state, loginStatus: action.data}
        default:
            return state
    }
}

export default reducer;