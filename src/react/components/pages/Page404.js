import React from 'react'
import {NavLink} from 'react-router-dom'


export class Page404 extends React.Component {
    
    render() {
        return (
            <div id="page404">
                <div className="page404__backdrop"></div>
                <div className="page404__content">
                    <div className="page404__image">
                        <img src="/dist/images/wildcard.png" />
                    </div>

                    <div className="page404__text">
                        Uh oh, looks like this page doesn't exist.
                    </div>

                    <div className="page404__home-button">
                        <NavLink to="/">
                            <button>
                                Return home
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


export default Page404