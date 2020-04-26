const UIDefaultState = {
    nav: false,
    white: false
}


export default (state = UIDefaultState, action) => {
    switch(action.type) {
        case 'NAV_TOGGLE':
            return {
                ...state,
                nav: state.nav ? false : true
            }

        case 'NAV_OFF':
            return {
                ...state,
                nav: false
            }

        case 'WHITE_ON':
            return {
                ...state,
                white: true
            }

        case 'WHITE_OFF':
            return {
                ...state,
                white: false
            }

        default:
            return state
    }
}