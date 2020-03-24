import React from 'react'

import HomeLink from '../content/HomeLink'


export class Home extends React.Component {
    render() {
        return (
            <div id="home">                
                <div className="home__content">
                    <div className="home__head">
                        <div className="home__name">
                            <h2>Robby Bergers</h2>
                        </div>
                        <div className="home__title">
                            <h3>Front End Developer</h3>
                        </div>
                    </div>

                    <div className="home__body">
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

                <div className="home__backdrop"></div>
            </div>
        )
    }
}


export default Home