const titleReducerDefaultState = {
    title: ''
}

export default (state = titleReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {
                title: action.title
            }

        default:
            return state
    }
}