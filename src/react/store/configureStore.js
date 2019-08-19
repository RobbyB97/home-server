import {createStore, combineReducers} from 'redux'
import navigationReducer from '../reducers/navigation'

export default = () => {
    combineReducers({
        navigation: navigationReducer
    })
}