import React from 'react'

export const Skill = (props) => (
    <div className="skill">
        <div className="skill__title">
            {props.title}
        </div>
        
        {props.bits &&
            <div className="skill__bits">
                {props.bits.map((bit) => {
                    if (bit.list) {
                        return (
                            <ul className="skill__list">
                                <p key={bit.skill}>{bit.skill}</p>
                                {bit.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )
                    } else {
                        return (
                            <p key={bit}>{bit}</p>
                        )    
                    }
                })}
            </div>
        }

        {props.description &&
            <div className="skill__description">
                {props.description}
            </div>
        }
    </div>
)

export default Skill