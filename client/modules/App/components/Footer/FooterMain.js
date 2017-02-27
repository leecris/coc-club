import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function FooterMain() {
  return (
    <div className="main-footer with-social color-scheme-light">
      <div className="footer-copy-and-menu-w">
        <div className="footer-menu">
          <ul id="footer-menu" className="menu">
            <li id="menu-item-1412"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1412">
              <a
                href="http://pluto.pinsupreme.com/page-for-members-only/">Page for members
                only</a></li>
            <li id="menu-item-1413"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1413">
              <a
                href="http://pluto.pinsupreme.com/login/">Login</a></li>
            <li id="menu-item-1414"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1414">
              <a
                href="http://pluto.pinsupreme.com/register/">Register</a></li>
          </ul>
        </div>
        <div className="footer-copyright"><a
          href="https://pinsupreme.com/wordpress-theme/clean-personal-masonry-blog-wordpress-theme"
          target="_blank" title="High Quality Wordpress theme for personal blogs">Masonry Grid Style
          Wordpress Blog Theme</a></div>
      </div>
      <div className="footer-social-w">
        <div className="zilla-social size-32px"><a href="http://www.facebook.com/PinSupreme"
                                                   className="Facebook"><img
          src="http://pluto.pinsupreme.com/wp-content/plugins/zilla-social/images/32px/Facebook.png"
          alt="Facebook"/></a> <a href="http://www.linkedin.com/in/username" className="LinkedIn"><img
          src="http://pluto.pinsupreme.com/wp-content/plugins/zilla-social/images/32px/LinkedIn.png"
          alt="LinkedIn"/></a> <a href="http://pinterest.com/username" className="Pinterest"><img
          src="http://pluto.pinsupreme.com/wp-content/plugins/zilla-social/images/32px/Pinterest.png"
          alt="Pinterest"/></a> <a href="https://twitter.com/PinSupreme" className="Twitter"><img
          src="http://pluto.pinsupreme.com/wp-content/plugins/zilla-social/images/32px/Twitter.png"
          alt="Twitter"/></a></div>
      </div>
    </div>
  );
}

export default FooterMain;
