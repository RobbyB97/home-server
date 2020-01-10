import {homeOn, homeOff, toggleHomePage, splashOn, splashOff} from '../../react/actions/home'


test('homeOn action', () => {
    const action = homeOn()

    expect(action).toEqual({
        type: 'HOME_ON'
    })
})


test('homeOff action', () => {
    const action = homeOff()

    expect(action).toEqual({
        type: 'HOME_OFF'
    })
})


test('toggleHomePage action', () => {
    const action = toggleHomePage()

    expect(action).toEqual({
        type: 'TOGGLE_HOMEPAGE'
    })
})


test('splashOn action', () => {
    const action = splashOn()

    expect(action).toEqual({
        type: 'SPLASH_ON'
    })
})


test('splashOff action', () => {
    const action = splashOff()

    expect(action).toEqual({
        type: 'SPLASH_OFF'
    })
})

