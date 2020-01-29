import React from 'react'


export class Job extends React.Component {

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
                    "job active" :
                    "job"}
                onMouseEnter={this.toggleOn}
                onMouseLeave={this.toggleOff}
            >
                {this.state.active ?
                    

                    <div className="job__active">
                        {this.props.time &&
                            <div className="job__time">
                                <p>
                                    {this.props.time.start} - {this.props.time.end}
                                </p>
                            </div>
                        }

                        {this.props.link &&
                            <div className="job__link">
                                <a href={this.props.link}>
                                    {this.props.name}'s website
                                </a>
                            </div>
                        }

                        <div className="job__description">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>

                :
                    <div className="job__inactive">
                        <div className="job__logo">
                            {this.props.logo &&
                                <img src={this.props.logo}/>
                            }
                        </div>

                        <div className="job__name">
                            <p>
                                {this.props.name}
                            </p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


export default Job