import React from 'react'
import {NavLink} from 'react-router-dom'


export class PrevPage extends React.Component {
    

    render() {
        return (
            <div className={this.props.float ? "prevpage float" : "prevpage"}>
                <NavLink 
                    to={this.props.route ? this.props.route : '/'}
                >
                    <p className="prevpage__text">
                        ← {this.props.text && this.props.text}
                    </p>
                
                </NavLink>
            </div>
        )
    }
}


export default PrevPage