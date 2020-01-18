import React from 'react'
import {Link, NavLink} from 'react-router-dom'


export default class Attribute extends React.Component {

    render() {
        return (
            <div className={this.props.title ? `attribute ${this.props.title.toLowerCase()}` : "attribute"}>
                <div className="attribute__top">
                    {this.props.image &&
                        <div className={this.props.fadeInTitle ? "attribute__image active" : "attribute__image"}>
                            <img src={this.props.image}/>
                        </div>
                    }
                            
                    {this.props.title && 
                        <h2 className={this.props.fadeInTitle === true ? "attribute__title active" : "attribute__title"}>
                            {this.props.title}
                        </h2>
                    }
                </div>

                <div className="attribute__bottom">
                    {this.props.text &&
                        <p className={this.props.fadeInText === true ? "attribute__text active" : "attribute__text"}>
                            {this.props.text}
                        </p>
                    }
                </div>
            </div>
        )
    }
}