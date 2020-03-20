import React from 'react'

import HomeLink from '../content/HomeLink'


export class NewHome extends React.Component {
    render() {
        return (
            <div id="newHome">                
                <div className="newHome__content">
                    <div className="newHome__head">
                        <div className="newHome__name">
                            <h2>Robby Bergers</h2>
                        </div>
                        <div className="newHome__title">
                            <h3>Front End Developer</h3>
                        </div>
                    </div>

                    <div className="newHome__body">
                        <HomeLink 
                            to="/skills"
                            linkText="skills"
                        />
                        <HomeLink
                            to="https://www.google.com"
                            linkText="google"
                            external
                        />
                    </div>
                </div>

                <div className="newHome__backdrop"></div>
            </div>
        )
    }
}


export default NewHome