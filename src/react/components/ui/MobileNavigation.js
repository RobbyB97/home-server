import React from 'react'
import {connect} from 'react-redux'

import {navToggle} from '../../actions/ui'


export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.navToggle = this.navToggle.bind(this);
        this.body = document.getElementsByTagName("BODY")[0];
        this.html = document.getElementsByTagName("HTML")[0];
    }

    navToggle = () => {
        // Reset scroll position
        if (this.props.nav) {   // Turning nav off
            this.body.style.overflow = "unset";
            this.html.style.overflow = "unset";
            this.body.style.overflowX = "hidden";

        } else {    // Turning nav on
            this.body.style.overflow = "hidden";
            this.html.style.overflow = "hidden";
        }

        this.props.navToggle();
    }

    render() {
        return (
            <section id="MobileNavigation">
                <div className="mobileNavigation__button"
                    data-nav={this.props.nav}
                >
                    <div onClick={this.navToggle}>
					    {this.props.nav ? '✕':'☰'}
                    </div>
				</div>

                <nav className="mobileNavigation__menu"
                    data-nav={this.props.nav}
                >
                    <ul className="mobileNavigation__links">
                        <li>
                            <a href="#About" onClick={this.navToggle}>About</a>
                        </li>
                        
                        <li>
                            <a href="#Skills" onClick={this.navToggle}>Skills</a>
                        </li>

                        <li>
                            <a href="#Projects" onClick={this.navToggle}>Projects</a>
                        </li>

                        <li>
                            <a href="#Experience" onClick={this.navToggle}>Experience</a>
                        </li>
                    </ul>
                </nav>
            </section>
        );
    }
}


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


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);