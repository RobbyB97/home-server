import React from 'react';


export class ExperienceSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        return (
            <article className="experienceSection">
                <header className="experienceSection__header">
                    {this.props.logo &&
                        <img 
                            className="experienceSection__logo"
                            src={this.props.logo}
                        />
                    }

                    <div className="experienceSection__info">
                        <h2 className="experienceSection__company">
                            {this.props.company}
                        </h2>

                        {this.props.jobTitle &&
                            <h4 className="experienceSection__jobTitle">
                                {this.props.jobTitle}
                            </h4>
                        }

                        {this.props.dates &&
                            <h5 className="experienceSection__dates">
                                {this.props.dates[0]} {this.props.dates[1] && `- ${this.props.dates[1]}`}
                            </h5>
                        }
                    </div>
                </header>
                
                <section 
                    className="experienceSection__description"
                    data-active={this.state.active}
                >
                    <p>{this.props.description}</p>
                </section>

                <footer 
                    className="experienceSection__footer"
                    data-active={this.state.active}
                    onClick={this.toggle}
                >
                    <p>{this.state.active ? "⮝" : "⮟"}</p>
                </footer>
            </article>
        );
    }
}


export default ExperienceSection;