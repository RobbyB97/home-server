import React from 'react'


export class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    toggle = () => {
        this.setState({active: !this.state.active})
    }

    toggleOn = () => {
        this.setState({active: true})
    }

    toggleOff = () => {
        this.setState({active: false})
    }

    render() {
        return (
            <div
                className={this.state.active ? 
                    "project active" : 
                    "project"}
                
                onMouseEnter={this.toggleOn}
                onMouseLeave={this.toggleOff}
            >
                {this.state.active ?
                    <div className="project__active">
                        
                    </div>
                :
                    <div className="project__inactive">
                        {this.props.logo &&
                            <img 
                                className="project__logo"
                                src={this.props.logo}
                            />
                        }

                        <p className="project__name">
                            {this.props.name}
                        </p>
                    </div>
                }
            </div>
        )
    }
}


export default Project