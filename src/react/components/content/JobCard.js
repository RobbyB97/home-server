import React from 'react'

export default (props) => (
    <div className="jobcard">
        {props.title && 
            <h2 className="jobcard__title">
                {props.title}
            </h2>
        }

        {props.text &&
            <p className="jobcard__text">
                {props.text}
            </p>
        }

        {props.image &&
            <div className="jobcard__image">
                <img src={props.image} />
            </div>
        }

    </div>
)
