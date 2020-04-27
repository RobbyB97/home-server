import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Portfolio from '../pages/Portfolio';
import {whiteOn, whiteOff} from '../actions/ui'


/* Router */
export class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const component = this;
        document.addEventListener('scroll', () => component.toggle()); 
    }

    toggle = () => {
        if (window.pageYOffset > 540) {
            this.props.whiteOn();

        } else {
            this.props.whiteOff();
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>

                        <Route
                            path="/"
                            component={Portfolio}
                            exact 
                        />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        white: state.ui.white
    };
}


const mapDispatchToProps = (dispatch) => ({
    whiteOn: () => dispatch(whiteOn()),
    whiteOff: () => dispatch(whiteOff())
});


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);