import React from 'react'

import Header from '../Header'
import StyleGuide from './StyleGuide'
import Card from '../Card'

import {Link, NavLink} from 'react-router-dom'

export default class ReactApp extends React.Component {

    render() {
        return (
            <div>
                <section className="space home-cover"></section>
                <div className="home-text one">
                        <h2>Home-text 1</h2>
                    </div>
                    <div className="home-text two">
                        <h2>Home-text 2</h2>
                    </div>
                    <Card
                        link="https://www.github.com/robbyb97"
                        image="/assets/images/favicon.png"
                        title="My Github"
                        subtext="View my projects"
                    />
                <div className="home-cover">
                </div>
            </div>
        )
    }

}