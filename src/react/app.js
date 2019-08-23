// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Loader from 'react-loader-spinner'
import 'normalize.css/normalize.css'


// Assets
import '../sass/main.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import toggleNav from './actions/navigation'
import {setTitle} from './actions/title'


// Variables
const $appRoot = document.getElementById('app')


// Configure store
const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})


const jsx = (
    <Provider store={store}>
        <div>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                visible="false"
            />
            <AppRouter />
        </div>
    </Provider>
)

ReactDOM.render(jsx, $appRoot)

