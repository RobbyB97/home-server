import titleReducer from '../../react/reducers/title'


test('titleReducer default state', () => {
    const state = titleReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        title: ''
    })
})


test('Change title', () => {
    const action = {
        type: 'SET_TITLE',
        title: 'Title!'
    }
    const state = titleReducer(undefined, action)

    expect(state.title).toBe('Title!')
})