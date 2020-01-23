import React from 'react'

export default (props) => (
    <div className="skill">
        <div className="skill__title">
            {props.title}
        </div>
        
        {props.bits &&
            <div className="skill__bits">
                {props.bits.map((bit) => (
                    <p>{bit}</p>
                ))}
            </div>
        }
        
        <div className="skill__description">
            {props.description}
        </div>
    </div>
)