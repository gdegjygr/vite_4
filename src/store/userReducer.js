const defaultState = {
    userNickname: "",
    email: "",
    password: ""
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                userNickname: action.payload.userNickname,
                email: action.payload.email,
                password: action.payload.password
            }
        default: return state
    }
}

export default userReducer