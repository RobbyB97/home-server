const homeReducerDefaultState = {
    home: true,
    splash: true,
    splashFade: true
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
                splash: true,
                splashFade: false
            }

        case 'SPLASH_OFF':
            return {
                ...state,
                splash: false,
                splashFade: false
            }

        default:
            return state
    }
}