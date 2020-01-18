const homeReducerDefaultState = {
    home: true,
    splash: true,
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

        case 'SPLASH_ON':
            return {
                ...state,
                splash: true
            }

        case 'SPLASH_OFF':
            return {
                ...state,
                splash: false
            }

        default:
            return state
    }
}