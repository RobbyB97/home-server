import React from 'react'


export class Job extends React.Component {

    render() {
        return (
            <div className="job">
                <h2 className="job__title">
                    {this.props.title}
                </h2>

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