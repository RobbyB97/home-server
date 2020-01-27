import homeReducer from '../../react/reducers/home'


test('homeReducer default state', () => {
    const state = homeReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        home: true,
        splash: true,
        splashFade: true
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


test('Set splash on', () => {
    const state = homeReducer(undefined, {type: 'SPLASH_ON'})

    expect(state.splash).toBe(true)
    expect(state.splashFade).toBe(false)
})


test('Set splash off', () => {
    const state = homeReducer(undefined, {type: 'SPLASH_OFF'})

    expect(state.splash).toBe(false)
    expect(state.splashFade).toBe(false)
})