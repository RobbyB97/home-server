import navigationReducer from '../../react/reducers/navigation'


test('navigationReducer default state', () => {
    const state = navigationReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        nav: false
    })
})


test('Toggle nav from default state', () => {
    const state = navigationReducer(undefined, {type: 'TOGGLE_NAV'})

    expect(state.nav).toBe(true)
})


test('Toggle nav from altered state', () => {
    const currentState = {
        nav: true
    }
    const state = navigationReducer(currentState, {type: 'TOGGLE_NAV'})

    expect(state.nav).toBe(false)
})


test('Toggle nav off from default state', () => {
    const state = navigationReducer(undefined, {type: 'TOGGLE_OFF'})

    expect(state.nav).toBe(false)
})


test('Toggle nav off from altered state', () => {
    const currentState = {
        nav: true
    }
    const state = navigationReducer(currentState, {type: 'TOGGLE_OFF'})

    expect(state.nav).toBe(false)
})

