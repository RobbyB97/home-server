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
            <img className="jobcard__image"
                src={props.image}/>
        }

    </div>
)

//export default JobCard