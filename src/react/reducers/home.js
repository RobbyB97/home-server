const homeReducerDefaultState = {
    home: true
}

export default (state = homeReducerDefaultState, action) => {
    switch (action.type) {
        case 'HOME_ON':
            return {
                home: true
            }
        
        case 'HOME_OFF':
            return {
                home: false
            }

        default:
            return state
    }
}