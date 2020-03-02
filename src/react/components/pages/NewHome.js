import React from 'react'


export class NewHome extends React.Component {
    render() {
        return (
            <div id="newHome">                
                <div className="newHome__content">
                    <div className="newHome__head">
                        <div className="newHome__name">
                            <h2>Robby Bergers</h2>
                        </div>
                        <div className="newHome__title">
                            <h3>Front End Developer</h3>
                        </div>
                    </div>

                    <div className="newHome__body">

                    </div>
                </div>

                <div className="newHome__backdrop"></div>
            </div>
        )
    }
}


export default NewHome