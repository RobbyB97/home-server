import React from 'react';


export class SkillSection extends React.Component {
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
    }

    render() {
        return (
            <article 
                className="skillSection"
                onClick={this.toggle}    
            >
                <header className="skillSection__header">
                    <h2 className="skillSection__title">
                        {this.props.title}
                    </h2>
                </header>

                <section 
                    className="skillSection__list"
                    data-active={this.state.active}    
                >
                    <ul>
                        {this.props.skills && 
                            this.props.skills.map((skill) => (
                                <li key={skill}>
                                    {skill}
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <footer
                    className="skillSection__footer"
                    data-active={this.state.active}
                >
                    <p data-active={this.state.active}>^</p>
                </footer>
            </article>
        );
    }
}


export default SkillSection;