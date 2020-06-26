import React from 'react';


export class ExperienceSection extends React.Component {
    render() {
        return (
            <article className="experienceSection">
                <header className="experienceSection__head">
                    {this.props.logo &&
                        <img 
                            className="experienceSection__logo"
                            src={this.props.logo}
                        />
                    }

                    <h2 className="experienceSection__company">
                        {this.props.company}
                    </h2>

                    {this.props.jobTitle &&
                        <h4 className="experienceSection__jobTitle">
                            {this.props.jobTitle}
                        </h4>
                    }
                </header>
                
                <section className="experienceSection__description">
                    <p>{this.props.description}</p>
                </section>
            </article>
        );
    }
}


export default ExperienceSection;