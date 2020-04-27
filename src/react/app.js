/* Libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'


/* Build files */
import '../sass/main.scss'
import storeConfig from './store/storeConfig'
import AppRouter from './routers/AppRouter'

/* Store */
const store = storeConfig()
store.subscribe(() => {
    //console.log(store.getState())
})


/* App */
const $appRoot = document.querySelector('#app')
const jsx = (
    <Provider store={store}>
        <div>
            <AppRouter />
        </div>
    </Provider>
)


/* Render */
ReactDOM.render(jsx, $appRoot)