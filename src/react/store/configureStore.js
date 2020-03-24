import {createStore, combineReducers} from 'redux'
import navigationReducer from '../reducers/navigation'
import homeReducer from '../reducers/home'

export default () => {
    return createStore(
        combineReducers({
            navigation: navigationReducer,
            home: homeReducer
        })
    )
}