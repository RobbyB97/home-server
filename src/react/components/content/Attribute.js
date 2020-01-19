import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default class Attribute extends React.Component {

    render() {
        return (
            <div className={this.props.title ? `attribute ${this.props.title.toLowerCase()}` : "attribute"}>
                <div className="attribute__top">
                    {this.props.image &&
                        <div className="attribute__image">
                            <img src={this.props.image}/>
                        </div>
                    }
                            
                    {this.props.title && 
                        <p className="attribute__title">
                            {this.props.title}
                        </p>
                    }
                </div>

                <div className="attribute__bottom">
                    {this.props.text &&
                        <p className="attribute__text">
                            {this.props.text}
                        </p>
                    }
                </div>
            </div>
        )
    }
}