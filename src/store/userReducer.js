// создаем глобальное (начальное) состояние defaultState:
const defaultState = {
    userNickname: "",
    email: "",
    password: ""
}

// ф-ция при помощи которой состояние выше будет меняться
const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state, 
                userNickname: action.payload.userNickname,
                email: action.payload.email,
                password: action.payload.password
            }
        // Правило 1: внутри этой ф-ции мы напрямую не можем менять состояния
        default: return state
    }
}

export default userReducer