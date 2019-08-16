import React from 'react'

import Header from './Header'
import ReactHome from './ReactHome'
import ReactTest1 from './ReactTest1'
import StyleGuide from './StyleGuide'

export default class ReactApp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: this.props.active,
            count: this.props.count
        }

        this.toggleNav = this.toggleNav.bind(this)
        this.test = this.test.bind(this)
    }
    
    toggleNav = () => {
        console.log(this.props.active)
        this.setState(() => ({
            active: !this.props.active
        }))
        console.log(this.state.active)
    }

    test = () => {
        this.setState(() => ({
            count: 100
        }))
        console.log(this.props.count)
    }
    
    render() {
        return (
            <Header 
                active={this.props.active}
                toggleNav={this.toggleNav}
                test={this.test}
                count={this.props.count}
            />
        )
    }
}

ReactApp.defaultProps = {
    active: false,
    count: 1
}