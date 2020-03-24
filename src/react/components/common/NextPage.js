import React from 'react'
import {NavLink} from 'react-router-dom'


export class NextPage extends React.Component {
    

    render() {
        return (
            <div className={this.props.float ? "nextPage float" : "nextPage"}>
                <NavLink 
                    to={this.props.route ? this.props.route : '/'}
                >
                    <p className="nextPage__text">
                        {this.props.text && this.props.text} →
                    </p>
                </NavLink>
            </div>
        )
    }
}


export default NextPage