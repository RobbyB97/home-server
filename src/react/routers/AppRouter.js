/* Libraries */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';


/* Components */
import Portfolio from '../pages/Portfolio'


/* Router */
export class AppRouter extends React.Component {
    toggleNavOff = () => {
        this.props.toggleNavOff()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>

                        <Route
                            path="/"
                            component={Portfolio}
                            exact 
                        />

                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default AppRouter