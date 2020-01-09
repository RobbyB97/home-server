// Components
import Article from '../content/Article'

export default class StyleGuide extends React.Component {
    
    render() {
        return (
            <div>
                <section className="inner">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4">
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
                            </div>
                            <div className="col-lg-4">
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
                            <div className="col-lg-4">
                                <button>This is a button</button>
                                <br/>
                                <form>
                                    <input type="text" placeholder="This is an input field" />
                                    <button>This is a submit button</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <p>This is a section!</p>
                        <section className="inner">
                            <p>This is an inner section!</p>
                        </section>
                        <section>
                            <p>This is a section in a section!</p>
                        </section>
                </section>
                <section className="dark-1">
                    <p>This is a dark-1 section</p>
                </section>
                <section className="dark-2">
                    <p>This is a dark-2 section</p>
                </section>
                <div className="padding">This is padding (probably don't put text in here)</div>
                <section className="article">
                    <p>This is a section.article</p>
                    <h2 className="article__title">This is an article title</h2>
                    <h3 className="article__subtitle">This is an article subtitle</h3>
                    <p className="article__text">This is article text</p>
                    <p className="article__subtext">This is article subtext</p>
                </section>
                <Article 
                    title="This is an article component title"
                    text="This is article component text"
                    image="/dist/images/favicon.png"
                    imageClass="large" // small, medium, large
                />
            </div>
        )
    }
} 

StyleGuide.defaultProps = {
    activeNav: false,
}