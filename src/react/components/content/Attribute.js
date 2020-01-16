import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


const Attribute = (props) => (
    <div className="attribute">
        {
            props.image &&
                <div className="attribute__image">
                    <img src={props.image}/>
                </div>
        }
        {
            props.title && 
                <h2 className="attribute__title">
                    {props.title}
                </h2>
        }

        {   props.text &&
                <p className="attribute__text">
                    {props.text}
                </p>
        }

    </div>
)

export default Attribute