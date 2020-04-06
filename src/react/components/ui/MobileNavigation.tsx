export {}

/* Libraries */
import * as React from 'react';
import {connect} from 'react-redux';

import {navToggle} from '../../actions/ui';


/* Component */
interface Props {
    nav: boolean,
    navToggle: typeof navToggle
}
interface State {
    nav: boolean,
    navToggle: typeof navToggle
}

export class MobileNavigation extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state
        }
    }

    navToggle = () => {
        this.state.navToggle();
    };

    public render() {
        const {nav} = this.state;
        const {navToggle} = this.state;

        return (
            <div id="MobileNavigation">
                <div className={nav ?
                    "mobileNavigation__button nav":
                    "mobileNavigation__button"}>
                    <div onClick={navToggle}>
					    {nav ? '✕':'☰'}
                    </div>
				</div>

                <div className={nav ? 
                    "mobileNavigation__menu nav":
                    "mobileNavigation__menu"}>
                    <ul className="mobileNavigation__links">
                        <li>
                            <a href="#about" onClick={navToggle}>about</a>
                        </li>
                        <li>
                            <a href="#services" onClick={navToggle}>services</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={navToggle}>skills</a>
                        </li>
                        <li>
                            <a href="#experience"onClick={navToggle}>experience</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={navToggle}>projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

/* Connect to store */
const mapStateToProps = (state) => ({
    nav: state.ui.nav,
});

const mapDispatchToProps = (dispatch) => ({
    navToggle: () => {
        dispatch(navToggle())
    }
});


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);