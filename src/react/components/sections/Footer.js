import React from 'react';

import Divider from '../Divider'


export class Footer extends React.Component {
    render() {
        return (
            <footer id="Footer" className="footer">
                <Divider section="footer__divider"/>
                
                <div className="footer__content">
                    <div className="footer__links">
                        
                    </div>

                    <p className="footer__copyright">
                        © Robert Bergers 2017-2020
                    </p>
                </div>
            </footer>
        );
    }
}


export default Footer;