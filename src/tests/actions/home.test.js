import {homeOn, homeOff} from '../../react/actions/home'


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

