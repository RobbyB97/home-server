import {createStore, combineReducers} from 'redux'

import uiReducer from '../reducers/ui'

export default (): any => {
    return createStore(
        combineReducers({
            ui: uiReducer
        })
    )
}