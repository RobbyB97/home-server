import React from 'react';


export class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        return (
            <article className="projectSection">
                <header className="projectSection__header">
                    {this.props.logo &&
                        <img
                            className="projectSection__logo"
                            src={this.props.logo}
                        />
                    }

                    <div className="projectSection__info">
                        <h2 className="projectSection__name">
                            {this.props.name}
                        </h2>

                        <h4 className="projectSection__languages">
                            {this.props.languages &&
                                this.props.languages.map((language) => (
                                    <mark key={language}>{language}</mark>
                                ))
                            }
                        </h4>

                        <nav className="projectSection__links">
                            {this.props.github && 
                                <a 
                                    className="projectSection__github"
                                    href={this.props.github}
                                >
                                    <img src="/dist/images/icons/github/github-white.png"/>
                                    <p>View on Github</p>
                                </a>
                            }

                            {this.props.website &&
                                <a 
                                    className="projectSection__website"
                                    href={this.props.website}
                                >
                                    View website
                                </a>
                            }

                            {this.props.customLinks &&
                                this.props.customLinks.map((link) => (
                                    {link}
                                ))
                            }
                        </nav>
                    </div>
                </header>

                <section
                    className="projectSection__description"
                    data-active={this.state.active}
                >
                    <p>{this.props.description}</p>
                </section>

                <footer
                    className="projectSection__footer"
                    data-active={this.state.active}
                    onClick={this.toggle}
                >
                    <p data-active={this.state.active}>^</p>
                </footer>
            </article>
        );
    }
}


export default ProjectSection;