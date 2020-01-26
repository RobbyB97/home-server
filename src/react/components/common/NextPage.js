import React from 'react'
import {NavLink} from 'react-router-dom'


export class NextPage extends React.Component {
    

    render() {
        return (
            <div className="nextpage">
                {this.props.text &&
                    <p className="nextpage__text">
                        {this.props.text}
                    </p>
                }
                <NavLink 
                    to={this.props.route ? this.props.route : '/'}
                >
                    <div className="nextpage__arrow">
                        <img src="/dist/images/icons/down_arrow_white.png"/>
                    </div>
                </NavLink>
            </div>
        )
    }
}


export default NextPage