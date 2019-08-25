import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({image, title, subtext, link}) => (
    <div className="card">
        <img src={image}/>
        <div className="card__text">
            <h2><Link to={link}>{title}</Link></h2>
            <p>{subtext}</p>
        </div>
    </div>
)

export default Card