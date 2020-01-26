import React from 'react'
import {NavLink} from 'react-router-dom'


export class WildCard extends React.Component {
    
    render() {
        return (
            <div id="wildcard">
                <div className="wildcard__backdrop"></div>
                <div className="wildcard__content">
                    <div className="wildcard__image">
                        <img src="/dist/images/wildcard.png" />
                    </div>

                    <div className="wildcard__text">
                        Uh oh, looks like this page doesn't exist.
                    </div>

                    <div className="wildcard__home-button">
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


export default WildCard