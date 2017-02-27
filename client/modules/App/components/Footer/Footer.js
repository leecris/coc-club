import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Components
import FooterPre from './FooterPre'
import FooterMain from './FooterMain'
// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterPre/>
        <FooterMain/>
      </div>
    );
  }
}

export default Footer;
