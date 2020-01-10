import {toggleNav, toggleNavOff} from '../../react/actions/navigation'


test('toggleNav action', () => {
    const action = toggleNav()

    expect(action).toEqual({
        type: 'TOGGLE_NAV'
    })
})


test('toggleNavOff action', () => {
    const action = toggleNavOff()

    expect(action).toEqual({
        type: 'TOGGLE_OFF'
    })
})