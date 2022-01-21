const FormReducer = (state, action) => {
    switch (action.type) {
        case "OPEN_MENU":
            return true
            break;
        case "CLOSE_MENU":
            return false
            break
        default:
            return state;
    }

}

export default FormReducer;
