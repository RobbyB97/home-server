import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'

import '../sass/main.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

// Variables
const $appRoot = document.getElementById('app')

const store = configureStore()

console.log(store.getState())

ReactDOM.render(<AppRouter />, $appRoot)

