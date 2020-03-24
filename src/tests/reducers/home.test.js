import homeReducer from '../../react/reducers/home'


test('homeReducer default state', () => {
    const state = homeReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        home: true
    })
})


test('Set home on', () => {
    const state = homeReducer(undefined, {type: 'HOME_ON'})

    expect(state.home).toBe(true)
})


test('Set home off', () => {
    const state = homeReducer(undefined, {type: 'HOME_OFF'})

    expect(state.home).toBe(false)
})