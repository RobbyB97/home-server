import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({image, title, subtext, link}) => (
    <div>
        <div className="card__wrap">
            <a className="card__link" href={link}>
                <div className="card">
                    <img src={image}/>
                    <div className="card__text">
                        <h2>{title}</h2>
                        <p>{subtext}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
)

export default Card