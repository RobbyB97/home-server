export {}

/* Libraries */
import * as React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Portfolio from '../pages/Portfolio';


/* Router */
export class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={Portfolio} exact />
            </HashRouter>
        );
    }
}


export default AppRouter;