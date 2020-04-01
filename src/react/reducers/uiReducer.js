const UIDefaultState = {
    nav: false
}


export default (state = UIDefaultState, action) => {
    switch(action.type) {
        case 'NAV_TOGGLE':
            return {
                nav: state.nav ? false : true
            }

        case 'NAV_OFF':
            return {
                nav: false
            }

        default:
            return state
    }
}