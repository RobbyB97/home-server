import React from 'react'

import HomeIcon from './HomeIcon'


export default class HomeIcons extends React.Component {

    render() {
        return (
            <div className="homeIcons">
                {this.props.icons &&
                    this.props.icons.map((icon) => {
                        <HomeIcon {...icon} />
                    })
                }
            </div>
        )
    }
}