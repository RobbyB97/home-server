import uiReducer from '../../react/reducers/ui'


test('uiReducer default state', () => {
    const state = uiReducer(undefined, {type: '@@INIT'})

    expect(state).toEqual({
        nav: false
    })
})


test('Toggle nav', () => {
    const state = uiReducer(undefined, {type: 'NAV_TOGGLE'})

    expect(state.nav).toBe(true)
})


test('Toggle nav off', () => {
    const state = uiReducer(undefined, {type: 'NAV_OFF'})

    expect(state.nav).toBe(false)
})