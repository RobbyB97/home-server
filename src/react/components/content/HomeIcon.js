import React from 'react'


export default class HomeIcon extends React.Component {

    render() {
        return (
            <div className="homeIcon">
                <a className="homeIcon__link" title={this.props.name} href={this.props.link}>
                    <img className="homeIcon__icon" src={this.props.icon} />
                </a>
            </div>
        )
    }
}