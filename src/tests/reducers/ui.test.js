import uiReducer from '../../react/reducers/ui';


test('uiReducer default state', () => {
    const state = uiReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        nav: false,
        white: false
    });
});


test('Toggle nav', () => {
    const state = uiReducer(undefined, {type: 'NAV_TOGGLE'});

    expect(state.nav).toBe(true);
});


test('Toggle nav off', () => {
    const state = uiReducer(undefined, {type: 'NAV_OFF'});

    expect(state.nav).toBe(false);
});


test('White mode on', () => {
    const state = uiReducer(undefined, {type: "WHITE_ON"});

    expect(state.white).toBe(true);
});


test('White mode off', () => {
    const state = uiReducer(undefined, {type: "WHITE_OFF"});

    expect(state.white).toBe(false);
});