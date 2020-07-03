import React from 'react';


export class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }


    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    };


    render() {
        return (
            <article className="projectSection">
                <header 
                    className="projectSection__header"
                    onClick={this.toggle}
                >
                    {this.props.logo &&
                        <img
                            className="projectSection__logo"
                            src={this.props.logo}
                        />
                    }

                    <h2 className="projectSection__name">
                        {this.props.name}
                    </h2>
                </header>

                <section
                    className="projectSection__description"
                    data-active={this.state.active}
                >
                    <div 
                        className="projectSection__languages"
                        onClick={this.toggle}    
                    >
                        {this.props.languages &&
                            this.props.languages.map((language) => (
                                <h5 key={language}>{language}</h5>
                            ))
                        }
                    </div>

                    <nav className="projectSection__links">
                        {this.props.github && 
                            <a 
                                className="projectSection__github"
                                href={this.props.github}
                                target="_blank"
                                rel="noopener"
                            >
                                <img src="/dist/images/icons/github/github-white-100.png"/>
                                <p>Github</p>
                            </a>
                        }

                        {this.props.website &&
                            <a 
                                className="projectSection__website"
                                href={this.props.website}
                                target="_blank"
                                rel="noopener"
                            >
                                Website
                            </a>
                        }

                        {this.props.customLinks &&
                            this.props.customLinks.map((link) => ((
                                <a 
                                    className="projectSection__customLink"
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener"
                                    key={link.link}
                                >
                                        {link.text}
                                </a>
                            )))
                        }
                    </nav>

                    <summary 
                        className="projectSection__summary"
                        onClick={this.toggle}
                    >
                        {this.props.description}
                    </summary>
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