export {}

/* Libraries */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';


/* Build files */
import '../sass/main.scss';
import storeConfig from './store/storeConfig';
import AppRouter from './routers/AppRouter';
import Portfolio from './pages/Portfolio'


/* Store */
const store = storeConfig();


/* Render */
ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
    , document.querySelector('#app') as HTMLElement);


/*ReactDOM.render(
    <Provider store={store}>
        <div>
            <p>hi</p>
            <AppRouter />
        </div>
    </Provider>
    , document.querySelector('#app') as HTMLElement);*/