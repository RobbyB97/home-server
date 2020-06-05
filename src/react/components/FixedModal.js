import React from 'react';


export class FixedModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleModal);
    }

    toggleModal = () => {
        // Only show once per visit
        window.removeEventListener('scroll', this.toggleModal);
        
        this.setState({
            active: !this.state.active
        });
    }
    
    render() {
        const modalStates = ['fixedModal__modal active', 'fixedModal__modal inactive']
        const closeStates = ['fixedModal__close active', 'fixedModal__close inactive']

        return (
            <section className="fixedModal">
                <div className={this.state.active ? modalStates[0]: modalStates[1]}>
                    {/* Content of modal */}
                    {this.props.text}

                    <button 
                        className={this.state.active ? closeStates[0]: closeStates[1]}
                        onClick={() => this.toggleModal}
                    >
                        ×
                    </button>
                </div>
            </section>
        );
    }
}


export default FixedModal;