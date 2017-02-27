import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';
import Banner from './Banner'
// Import Style
import styles from './Header.css';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let imgFull = {
      width: '100%'
    }
    return (
      <div className="featured-carousel-w">
        <img style={imgFull} className="full" src={"static/images/static_header.jpg"} alt=""/>
        <div className="featured-carousel owl-carousel">

          {/*<article id="post-carousel-43"*/}
          {/*className="featured-carousel-post post-43 post type-post status-publish format-standard has-post-thumbnail hentry category-desserts tag-chocolate tag-nuts tag-tea">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/&amp;text=Chocolate+Hazelnut+Biscotti"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362.jpg&amp;description=Chocolate+Hazelnut+Biscotti"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Chocolate+Hazelnut+Biscotti&amp;Body=%20http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_102477362"*/}
          {/*srcSet="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-600x400.jpg 600w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-300x200.jpg 300w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-768x512.jpg 768w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-1024x682.jpg 1024w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-558x372.jpg 558w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-864x576.jpg 864w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362-400x267.jpg 400w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_102477362.jpg 1400w"*/}
          {/*sizes="(max-width: 600px) 100vw, 600px"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/chocolate-hazelnut-biscotti/"*/}
          {/*className="post-title entry-title">Chocolate Hazelnut Biscotti</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/desserts/" rel="category tag">Desserts</a>*/}
          {/*</li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-136"*/}
          {/*className="featured-carousel-post post-136 post type-post status-publish format-standard has-post-thumbnail hentry category-appetizer category-desserts tag-cake">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/&amp;text=Coconut+whipped+topping"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_124533179.jpg&amp;description=Coconut+whipped+topping"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Coconut+whipped+topping&amp;Body=%20http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_124533179-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_124533179"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping/"*/}
          {/*className="post-title entry-title">Coconut whipped topping</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/appetizer/"*/}
          {/*rel="category tag">Appetizer</a></li>*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/desserts/" rel="category tag">Desserts</a>*/}
          {/*</li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-282"*/}
          {/*className="featured-carousel-post post-282 post type-post status-publish format-standard has-post-thumbnail hentry category-main-dish tag-vegie">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/&amp;text=Gingerbread+cake"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371.jpg&amp;description=Gingerbread+cake"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Gingerbread+cake&amp;Body=%20http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_117837371"*/}
          {/*srcSet="http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-600x400.jpg 600w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-300x200.jpg 300w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-768x512.jpg 768w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-1024x682.jpg 1024w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-558x372.jpg 558w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-864x576.jpg 864w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371-400x267.jpg 400w, http://pluto.pinsupreme.com/wp-content/uploads/2014/02/AdobeStock_117837371.jpg 1400w"*/}
          {/*sizes="(max-width: 600px) 100vw, 600px"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/gingerbread-cake-with-coconut-whipped-topping-2/"*/}
          {/*className="post-title entry-title">Gingerbread cake</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/main-dish/" rel="category tag">Main*/}
          {/*Dish</a></li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-165"*/}
          {/*className="featured-carousel-post post-165 post type-post status-publish format-standard has-post-thumbnail hentry category-vegeterian tag-creame tag-eggs tag-vegan">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/lemon-curd-mousse/&amp;text=Lemon+Curd+Jam"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/lemon-curd-mousse/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_117831620.jpg&amp;description=Lemon+Curd+Jam"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Lemon+Curd+Jam&amp;Body=%20http://pluto.pinsupreme.com/lemon-curd-mousse/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a href="http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_117831620-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_117831620"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/lemon-curd-mousse/"*/}
          {/*className="post-title entry-title">Lemon*/}
          {/*Curd Jam</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/vegeterian/"*/}
          {/*rel="category tag">Vegeterian</a></li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-280"*/}
          {/*className="featured-carousel-post post-280 post type-post status-publish format-standard has-post-thumbnail hentry category-main-dish tag-dish">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/&amp;text=Peanut+butter+whip"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/03/AdobeStock_117837587.jpg&amp;description=Peanut+butter+whip"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Peanut+butter+whip&amp;Body=%20http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/03/AdobeStock_117837587-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_117837587"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/chocolate-mousse-pie-with-peanut-butter-whip-3/"*/}
          {/*className="post-title entry-title">Peanut butter whip</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/main-dish/" rel="category tag">Main*/}
          {/*Dish</a></li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-331"*/}
          {/*className="featured-carousel-post post-331 post type-post status-publish format-standard has-post-thumbnail hentry category-main-dish tag-chicken tag-potatoes">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/&amp;text=French+Kurma+Salad"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419.jpg&amp;description=French+Kurma+Salad"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=French+Kurma+Salad&amp;Body=%20http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_94033419"*/}
          {/*srcSet="http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-600x400.jpg 600w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-300x200.jpg 300w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-768x512.jpg 768w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-1024x682.jpg 1024w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-558x372.jpg 558w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-864x576.jpg 864w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419-400x267.jpg 400w, http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_94033419.jpg 1400w"*/}
          {/*sizes="(max-width: 600px) 100vw, 600px"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/potato-kurma-with-fried-onion/"*/}
          {/*className="post-title entry-title">French Kurma Salad</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/main-dish/" rel="category tag">Main*/}
          {/*Dish</a></li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
          {/*<article id="post-carousel-154"*/}
          {/*className="featured-carousel-post post-154 post type-post status-publish format-standard has-post-thumbnail hentry category-music tag-cake tag-desserts-2">*/}
          {/*<div className="post-top-share">*/}
          {/*<i className="fa os-icon-plus share-activator-icon share-activator"></i>*/}
          {/*<span className="share-activator-label share-activator caption">Share</span>*/}
          {/*<div className="os_social-head-w">*/}
          {/*<div className="os_social"><a className="os_social_twitter_share"*/}
          {/*href="http://twitter.com/share?url=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/&amp;text=Cream+cheese+chicken"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"*/}
          {/*title="Twitter" className="os_social" alt="Tweet about this on Twitter"/></a><a*/}
          {/*className="os_social_pinterest_share" data-pin-custom="true" target="_blank"*/}
          {/*href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455.jpg&amp;description=Cream+cheese+chicken"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/pinterest.png"*/}
          {/*title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a*/}
          {/*className="os_social_linkedin_share"*/}
          {/*href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/linkedin.png"*/}
          {/*title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a*/}
          {/*className="os_social_google_share"*/}
          {/*href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/google.png"*/}
          {/*title="Google+" className="os_social" alt="Share on Google+"/></a><a*/}
          {/*className="os_social_email_share"*/}
          {/*href="mailto:?Subject=Cream+cheese+chicken&amp;Body=%20http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/email.png"*/}
          {/*title="Email" className="os_social" alt="Email this to someone"/></a><a*/}
          {/*className="os_social_facebook_share"*/}
          {/*href="http://www.facebook.com/sharer.php?u=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/facebook.png"*/}
          {/*title="Facebook" className="os_social" alt="Share on Facebook"/></a><a*/}
          {/*className="os_social_vk_share"*/}
          {/*href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/vkontakte.png"*/}
          {/*title="Vkontakte" className="os_social" alt="Share on Vkontakte"/></a><a*/}
          {/*className="os_social_ok_share"*/}
          {/*href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*target="_blank"><img*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/ok.png"*/}
          {/*title="Odnoklassniki" className="os_social" alt="Share on Odnoklassniki"/></a>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*<div className="post-media-body">*/}
          {/*<div className="figure-link-w"><a*/}
          {/*href="http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*className="figure-link ">*/}
          {/*<figure><img width="600" height="400"*/}
          {/*src="http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-600x400.jpg"*/}
          {/*className="attachment-pluto-carousel-post size-pluto-carousel-post wp-post-image"*/}
          {/*alt="adobestock_111625455"*/}
          {/*srcSet="http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-600x400.jpg 600w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-300x200.jpg 300w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-768x512.jpg 768w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-1024x682.jpg 1024w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-558x372.jpg 558w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-864x576.jpg 864w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455-400x267.jpg 400w, http://pluto.pinsupreme.com/wp-content/uploads/2014/05/AdobeStock_111625455.jpg 1400w"*/}
          {/*sizes="(max-width: 600px) 100vw, 600px"/>*/}
          {/*<div className="figure-shade"></div>*/}
          {/*<i className="figure-icon os-icon-thin-044_visability_view_watch_eye"></i>*/}
          {/*</figure>*/}
          {/*</a></div>*/}
          {/*</div>*/}
          {/*<div className="post-content-body">*/}
          {/*<a href="http://pluto.pinsupreme.com/cream-cheese-chicken-taquitos/"*/}
          {/*className="post-title entry-title">Cream cheese chicken</a>*/}
          {/*<ul className="post-categories">*/}
          {/*<li><a href="http://pluto.pinsupreme.com/category/music/"*/}
          {/*rel="category tag">Music</a></li>*/}
          {/*</ul>*/}
          {/*</div>*/}
          {/*</article>*/}
        </div>
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
