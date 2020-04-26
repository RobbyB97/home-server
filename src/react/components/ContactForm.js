/* Libraries */
import React from 'react'


export class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    }

    handleSubmit(event) {
        console.log('hi')
    }

    render() {
        return (
            <div className="ContactForm">
                <br /><br /><br /><br /><br />
                <form id="contactForm">
                    <p>
                        <label>Name</label>
                        <input type="text" 
                            value={this.state.nameValue} 
                            onChange={this.handleNameChange} 
                            required 
                        />
                    </p>
                </form>
            </div>
        );
    }
}


export default ContactForm