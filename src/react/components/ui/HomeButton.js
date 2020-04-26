/* Libraries */
import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {navToggle} from '../../actions/ui'


/* Component */
export class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        const component = this;
        document.addEventListener('scroll', () => {
            component.toggle()
        })
    }

    toggle = () => {
        if (window.pageYOffset > 300) {
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
        }
    }

    navToggle = () => {
        this.props.navToggle()
    }

    render() {
        return (
            <div id="HomeButton" 
                className={this.props.nav || this.props.white ? "nav":""}
                onClick={this.props.nav && this.navToggle}
                >
                
                {this.props.internal ?
                    <a href="#app" className={this.state.show ?
                        "homeButton__logo show":
                        "homeButton__logo"
                    }>B</a>
                :
                    <NavLink to="/" onClick={this.toTop}
                        className={this.state.show ?
                            "homeButton__logo show":
                            "homeButton__logo"
                        }>
                        B
				    </NavLink>
                }
            </div>
        )
    }
}


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        nav: state.ui.nav,
        white: state.ui.white
    }
}

const mapDispatchToProps = (dispatch) => ({
    navToggle: () => {
        dispatch(navToggle())
    }
})


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(HomeButton)