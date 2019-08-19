import {createStore, combineReducers} from 'redux'
import navigationReducer from '../reducers/navigation'
import titleReducer from '../reducers/title'

export default () => {
    return createStore(
        combineReducers({
            navigation: navigationReducer,
            title: titleReducer
        })
    )
}