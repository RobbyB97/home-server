import React from 'react'
import {NavLink} from 'react-router-dom'


export default class HomeLink extends React.Component {

    render() {
        return (
            <div className='homeLink'>
                {this.props.external ?
                    <a className="homeLink__link" href={this.props.to}>
                        {this.props.icon &&
                            <img className="homeLink__icon" src={this.props.icon} />
                        }

                        <p className="homeLink__link-text">
                            {this.props.linkText ?
                                this.props.linkText
                            :
                                <p>HomeLink External</p>
                            }
                        </p>
                    </a>
                :
                    <NavLink className="homeLink__link" to={this.props.to}>
                        {this.props.icon &&
                            <img className="homeLink__icon" src={this.props.icon} />
                        }

                        <p className='homeLink__link-text'>
                            {this.props.linkText ?
                                this.props.linkText
                            :
                                <p>HomeLink Internal</p>
                            }
                        </p>
                    </NavLink>
                }
            </div>
        )
    }
}