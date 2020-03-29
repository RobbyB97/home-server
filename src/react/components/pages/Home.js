import React from 'react'

import HomeLink from '../content/HomeLink'
import HomeIcons from '../content/HomeIcon'

import {
    homeIcon_GitHub,
    homeIcon_LinkedIn
} from '../../data/content/HomeIcon'
import {
    homeLink_Skills,
    homeLink_Experience,
    homeLink_Projects,
    homeLink_Resume
} from '../../data/content/homeLink'



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
                        <HomeIcons icons={[homeIcon_GitHub, homeIcon_LinkedIn]} />
                        
                        <HomeLink {...homeLink_Skills} />
                        <HomeLink {...homeLink_Experience} />
                        <HomeLink {...homeLink_Projects} />
                        <HomeLink {...homeLink_Resume} />
                    </div>
                </div>

                <div className="home__backdrop"></div>
            </div>
        )
    }
}


export default Home