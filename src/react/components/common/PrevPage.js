import React from 'react'
import {NavLink} from 'react-router-dom'


export class PrevPage extends React.Component {
    

    render() {
        return (
            <div className="prevpage">
                {this.props.text &&
                    <p className="prevpage__text">
                        {this.props.text}
                    </p>
                }
                <NavLink 
                    to={this.props.route ? this.props.route : '/'}
                >
                    <div className="prevpage__arrow">
                        <img src="/dist/images/icons/down_arrow_white.png"/>
                    </div>
                </NavLink>
            </div>
        )
    }
}


export default PrevPage