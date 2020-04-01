import {navToggle, navOff} from '../../react/actions/ui'


test('navToggle action', () => {
    const action = navToggle()

    expect(action).toEqual({
        type: 'NAV_TOGGLE'
    })
})


test('navOff action', () => {
    const action = navOff()

    expect(action).toEqual({
        type: 'NAV_OFF'
    })
})