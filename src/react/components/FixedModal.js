import React from 'react';


export class FixedModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggle);
    }

    toggle = () => {
        // Only show once per visit
        window.removeEventListener('scroll', this.toggle);

        this.setState({
            active: !this.state.active
        });
    }
    
    render() {
        return (
            <aside className="fixedModal">
                <article 
                    className="fixedModal__modal"
                    data-active={this.state.active}    
                >
                    {/* Content of modal */}
                    {this.props.text}

                    <button 
                        className="fixedModal__close" 
                        data-active={this.state.active}
                        onClick={this.toggle}
                    >
                        ×
                    </button>
                </article>
            </aside>
        );
    }
}


export default FixedModal;