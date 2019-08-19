import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'

import '../sass/main.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import toggleNav from './actions/navigation'

// Variables
const $appRoot = document.getElementById('app')

const store = configureStore()

console.log(store.getState())
store.dispatch(toggleNav())
console.log(store.getState())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, $appRoot)

