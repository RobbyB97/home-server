import {createStore, combineReducers} from 'redux'
import navigationReducer from '../reducers/navigation'

export default () => {
    return createStore(
        combineReducers({
            navigation: navigationReducer
        })
    )
}