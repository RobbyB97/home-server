/*
   Standard Article
*/

import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

export const Article = (props) => (
    <div className="article">
        {props.title && 
            <h2 className="article__title">
                {props.title}
            </h2>
        }

        {props.text &&
            <p className="article__text">
                {props.text}
            </p>
        }

    </div>
)

export default connect()(Article)