import React from 'react'


export class Job extends React.Component {

    render() {
        return (
            <div className="job">
                <p className="job__title">
                    {this.props.title}
                </p>

                {this.props.text &&
                    <p className="job__text">
                        {this.props.text}
                    </p>
                }

                {this.props.image &&
                    <div className="job__image">
                        <img src={this.props.image} />
                    </div>
                }
            </div>
        )
    }
}


export default Job