import {createStore, combineReducers} from 'redux'

import uiReducer from '../reducers/ui.js'

export default () => {
    return createStore(
        combineReducers({
            ui: uiReducer
        })
    )
}