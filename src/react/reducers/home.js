const homeReducerDefaultState = {
    home: true,
    homePage: false
}

export default (state = homeReducerDefaultState, action) => {
    switch (action.type) {
        case 'HOME_ON':
            return {
                ...state,
                home: true
            }
        
        case 'HOME_OFF':
            return {
                ...state,
                home: false
            }

        case 'TOGGLE_HOMEPAGE':
            let thing = !state.homePage
            return {
                ...state,
                homePage: thing
            }

        default:
            return state
    }
}