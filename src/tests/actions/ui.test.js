import {navToggle, navOff, whiteOn, whiteOff} from '../../react/actions/ui';


test('navToggle action', () => {
    const action = navToggle();

    expect(action).toEqual({
        type: 'NAV_TOGGLE'
    });
});


test('navOff action', () => {
    const action = navOff();

    expect(action).toEqual({
        type: 'NAV_OFF'
    });
});


test('whiteOn action', () => {
    const action = whiteOn();

    expect(action).toEqual({
        type: 'WHITE_ON'
    });
});


test('whiteOff action', () => {
    const action = whiteOff();

    expect(action).toEqual({
        type: 'WHITE_OFF'
    });
});
