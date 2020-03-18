import React from 'react'
import {NavLink} from 'react-router-dom'


export default class HomeLink extends React.Component {

    render() {
        return (
            <div className='home-link'>
                {this.props.external ?
                    <a className="home-link__link" href={this.props.to}>
                        {this.props.icon &&
                            <img className="home-link__icon" src={this.props.icon} />
                        }

                        <p className="home-link__link-text">
                            {this.props.linkText ?
                                this.props.linkText
                            :
                                <p>HomeLink External</p>
                            }
                        </p>
                    </a>
                :
                    <NavLink className="home-link__link" to={this.props.to}>
                        {this.props.icon &&
                            <img className="home-link__icon" src={this.props.icon} />
                        }

                        <p className='home-link__link-text'>
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