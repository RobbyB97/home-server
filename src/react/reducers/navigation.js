const navigationReducerDefaultState = {
    nav: false
}

export default (state = navigationReducerDefaultState, action) => {
    switch (action.type) {
        case 'TOGGLE_NAV':
            let toggle = !state.nav
            return {
                nav: toggle
            }
        default:
            return state
    }
}