import React from 'react';
import '../stylesheets/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/jeroen-zwart-975585a0/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a href="https://github.com/jfzwart"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            </div>
            {/* <Image className="footer" cloudName="dtz9pdkde" publicId="Banner_voetbalk_exutp0" crop="scale" /> */}
        </div>
    )
}

export default Footer;