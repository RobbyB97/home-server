// Import components
import Header from './Header'
import ReactHome from './ReactHome'
import ReactTest1 from './ReactTest1'

export default class StyleGuide extends React.Component {
    state = {
        active: this.props.activeNav
    }

    toggleNav = () => {
        let thing = !this.state.activeNav
        this.setState(() => ({
            activeNav: thing
        }))
    }

    render() {
        return (
            <div>
                <Header 
                    toggleNav={this.toggleNav}
                    activeNav={this.state.activeNav}
                />
                <div class="main-content">
                    <h1>This is an h1</h1>
                    <h2>This is an h2</h2>
                    <h3>This is an h3</h3>
                    <h4>This is an h4</h4>
                    <h5>This is an h5</h5>
                    <h6>This is an h6</h6>
                    <br/>
                    <p>
                        This is a standard p tag,<br/>
                        <a href="#">This is a link</a>
                    </p>
                    <ul>
                        <li>This</li>
                        <li>is</li>
                        <li>an</li>
                        <li>unordered</li>
                        <li>list</li>
                    </ul>
                    <ol>
                        <li>This</li>
                        <li>is</li>
                        <li>an</li>
                        <li>ordered</li>
                        <li>list</li>
                    </ol>
                </div>
            </div>
        )
    }
} 

StyleGuide.defaultProps = {
    activeNav: false,
}