import React from 'react'


export class Project extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }

    toggleOn = () => this.setState({active: true})
    toggleOff = () => this.setState({active: false})

    
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
                        {this.props.link &&
                            <div className="project__link">
                                <a href={this.props.link} target="_blank">
                                    {this.props.linkText || "View on GitHub"}
                                </a>
                            </div>
                        }

                        <div className="project__description">
                            {this.props.description}
                        </div>
                    </div>
                :
                    <div className="project__inactive">
                        <div className="project__name">
                            <p>
                                {this.props.name}
                            </p>
                        </div>

                        {this.props.languages &&
                            <div className="project__languages">
                                <p>
                                    {this.props.languages}
                                </p>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}


export default Project