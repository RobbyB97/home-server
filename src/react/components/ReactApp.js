import React from 'react'

import Header from './Header'
import ReactHome from './ReactHome'
import ReactTest1 from './ReactTest1'
import StyleGuide from './StyleGuide'

export default class ReactApp extends React.Component {
    state = {
        active: this.props.active
    }
    
    toggleNav() {
        this.setState(() => ({
            active: !this.props.active
        }))
    }
    
    render() {
        return (
            <Header 
                active={this.props.active}
                toggleNav={this.toggleNav}
            />
        )
    }
}

ReactApp.defaultProps = {
    active: false
}