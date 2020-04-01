/* Libraries */
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';


/* Components */
import MobileNavigation from '../components/ui/MobileNavigation'
import DesktopNavigation from '../components/ui/DesktopNavigation'
import HomeButton from '../components/ui/HomeButton'

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
                    <HomeButton />
                    <DesktopNavigation />
                    <MobileNavigation />
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