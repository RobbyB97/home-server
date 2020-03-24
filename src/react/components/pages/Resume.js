import React from 'react'

import PrevPage from '../common/PrevPage'
import NextPage from '../common/NextPage'


export class Resume extends React.Component {
    render() {
        return (
            <div id="resume">
                <object data="/resume.pdf">
                    <p>Looks like your browser doesn't support PDF files.</p>
                    <p><a href="/resume.pdf" download>Download instead.</a></p>
                </object>

                <PrevPage
                    route="/projects"
                    float={true}
                />

                <div className="nextPage float">
                    <a href="mailto:bergersr@my.easternct.edu">
                        <p className="nextPage__text">
                            Contact me
                        </p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Resume