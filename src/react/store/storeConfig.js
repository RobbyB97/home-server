import {createStore, combineReducers} from 'redux'

import uiReducer from '../reducers/uiReducer.js'

export default () => {
    return createStore(
        combineReducers({
            ui: uiReducer
        })
    )
}