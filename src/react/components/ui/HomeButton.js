/* Libraries */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {navToggle} from '../../actions/ui';


/* Component */
export class HomeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount() {
        const component = this;
        document.addEventListener('scroll', () => {
            component.toggle();
        });
    }

    toggle = () => {
        if (window.pageYOffset > 300) {
            this.setState({
                show: true
            });
        } else {
            this.setState({
                show: false
            });
        }
    }

    navToggle = () => {
        this.props.navToggle();
    }

    render() {
        return (
            <section id="HomeButton" 
                data-active={this.props.nav || this.props.white}
                onClick={this.props.nav && this.navToggle}
                >
                
                {this.props.internal ?
                    <a  
                        href="#app" 
                        className="homeButton__logo"
                        data-show={this.state.show}
                    >
                        B
                    </a>
                :
                    <NavLink 
                        to="/" 
                        onClick={this.toTop}
                        className="homeButton__logo"
                        data-show={this.state.show}
                    >
                        B
				    </NavLink>
                }
            </section>
        );
    }
}


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        nav: state.ui.nav,
        white: state.ui.white
    }
};

const mapDispatchToProps = (dispatch) => ({
    navToggle: () => {
        dispatch(navToggle());
    }
});


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);