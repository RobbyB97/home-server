import React from 'react'

import Header from './Header'
import ReactHome from './ReactHome'
import ReactTest1 from './ReactTest1'
import StyleGuide from './StyleGuide'

import {NavLink} from 'react-router-dom'

export default class ReactApp extends React.Component {
    state = {
        active: this.props.activeNav
    }

    toggleNav = () => {
        let thing = !this.state.activeNav
        this.setState(() => ({
            activeNav: thing
        }))
    }

    componentDidUpdate() {
        console.log('update')
    }

    render() {
        return (
            <div>
                <Header 
                    toggleNav={this.toggleNav}
                    activeNav={this.state.activeNav}
                />
                <p>ok</p>
            </div>
        )
    }

}

ReactApp.defaultProps = {
    activeNav: false,
    count: 1
}