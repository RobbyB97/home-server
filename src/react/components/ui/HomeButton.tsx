export {};

/* Libraries */
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {navToggle} from '../../actions/ui';


/* Component */
interface Props {
    nav?: boolean,
    internal?: boolean,
    navToggle?: typeof navToggle
}
interface State {
    show: boolean,
    nav: boolean,
    navToggle: typeof navToggle
}


export class HomeButton extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            ...this.state,
            show: false,
            nav: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.toggle();
        })
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
        this.state.navToggle();
    }

    public render() {
        const {nav} = this.state;
        const {internal} = this.props;
        const {show} = this.state;
        const {navToggle} = this.state;

        return (
            <div id="HomeButton" 
                className={nav ? "nav":""}
                onClick={nav && navToggle}
                >
                
                {internal ?
                    <a href="#app" className={show ?
                        "homeButton__logo show":
                        "homeButton__logo"
                    }>B</a>
                :
                    <NavLink to="/" className={show ?
                        "homeButton__logo show":
                        "homeButton__logo"}>
                        B
				    </NavLink>
                }
            </div>
        );
    }
}


/* Connect to store */
const mapStateToProps = (state): any => {
    return {
        nav: state.ui.nav
    };
};

const mapDispatchToProps = (dispatch): any => ({
    navToggle: () => {
        dispatch(navToggle());
    }
});


/* Export */
export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);