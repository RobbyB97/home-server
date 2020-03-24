import React from 'react'


export class Resume extends React.Component {
    render() {
        return (
            <div id="resume">
                <object data="/resume.pdf">
                    <p>Looks like your browser doesn't support PDF files.</p>
                    <p><a href="/resume.pdf" download>Download instead.</a></p>
                </object>
            </div>
        )
    }
}

export default Resume