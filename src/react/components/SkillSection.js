import React from 'react';


export class SkillSection extends React.Component {
    render() {
        return (
            <div className="skillSection">
                <h2 className="skillSection__title">
                    {this.props.title}
                </h2>
                <ul>
                    {this.props.skills && 
                        this.props.skills.map((skill) => (
                            <li>
                                {skill}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}


export default SkillSection;