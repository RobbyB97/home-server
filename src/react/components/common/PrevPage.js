import React from 'react'
import {NavLink} from 'react-router-dom'


export class PrevPage extends React.Component {
    

    render() {
        return (
            <div className={this.props.float ? "prevPage float" : "prevPage"}>
                <NavLink 
                    to={this.props.route ? this.props.route : '/'}
                >
                    <p className="prevPage__text">
                        ← {this.props.text && this.props.text}
                    </p>
                
                </NavLink>
            </div>
        )
    }
}


export default PrevPage