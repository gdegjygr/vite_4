const defaultState = {
    light: true,
    darkness: false,
}

const themeReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_THEME":
        return {
            ...state,
            light: !state.light,
            darkness: !state.darkness,
        }
        default: return state
    }
}

export default themeReducer