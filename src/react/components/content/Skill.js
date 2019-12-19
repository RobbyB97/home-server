import React from 'react'

export default (props) => (
    <div className="skill">
        <button className="skill__button">
            <h2 className="skill__title">
                {props.title}
            </h2>
        </button>
        <div className="skill__content">
            <p>
                {props.description}
            </p>
        </div>
    </div>
)