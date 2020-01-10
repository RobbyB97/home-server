import {setTitle} from '../../react/actions/title'


test('setTitle action', () => {
    const action = setTitle('title!')

    expect(action).toEqual({
        type: 'SET_TITLE',
        title: 'title!'
    })
})