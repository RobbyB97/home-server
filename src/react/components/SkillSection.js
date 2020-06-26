import React from 'react';


export class SkillSection extends React.Component {
    render() {
        return (
            <article className="skillSection">
                <h2 className="skillSection__title">
                    {this.props.title}
                </h2>

                <ul className="skillSection__list">
                    {this.props.skills && 
                        this.props.skills.map((skill) => (
                            <li key={skill}>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </article>
        );
    }
}


export default SkillSection;