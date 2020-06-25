import React from 'react'
import {connect} from 'react-redux'

import {navToggle} from '../../actions/ui'


export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    navToggle = () => {
        this.props.navToggle();
    }

    render() {
        return (
            <div id="MobileNavigation">
                <div className="mobileNavigation__button"
                    data-nav={this.props.nav}
                >
                    <div onClick={this.navToggle}>
					    {this.props.nav ? '✕':'☰'}
                    </div>
				</div>

                <div className="mobileNavigation__menu"
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
                </div>
            </div>
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