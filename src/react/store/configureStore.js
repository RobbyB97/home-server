import {createStore, combineReducers} from 'redux'
import navigationReducer from '../reducers/navigation'
import titleReducer from '../reducers/title'
import homeReducer from '../reducers/home'

export default () => {
    return createStore(
        combineReducers({
            navigation: navigationReducer,
            title: titleReducer,
            home: homeReducer
        })
    )
}