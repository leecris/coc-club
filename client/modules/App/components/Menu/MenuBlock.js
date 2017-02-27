/**
 * Created by Admin on 1/17/2017.
 */
import React from 'react'
import SocialIcon from '../Socials/SocialIcon'
class MenuBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {

    }
    anchorClickHandler(e) {
        e.preventDefault();
        var $elem = $(e.target).closest('li');
        if($elem.hasClass('active')){
            $elem.closest('ul').removeClass('inactive');
            $elem.removeClass('active').find('.sub-menu').first().slideUp(200);
        }else{
            $elem.closest('ul').addClass('inactive');
            $elem.addClass('active').find('.sub-menu').first().slideDown(200);
        }
        return false;

    }
    render() {
        return (
            <div className="menu-block hidden-on-smaller-screens">
                <div className="menu-left-i">
                    <div className="logo">
                        <a href="http://pluto.pinsupreme.com/">
                            <img src={"static/images/clash-of-clans-update.png"} alt={""}/>
                            <span>Club</span>
                        </a>
                    </div>
                    <form method="get" className="search-form" action="http://pluto.pinsupreme.com/" autoComplete="off">
                        <div className="search-field-w">
                            <input type="search" autoComplete="off" className="search-field" placeholder="Search"
                                   value="" name="s" title="Search for:"/>
                            <input type="submit" className="search-submit" value="Search"/>
                        </div>
                    </form>
                    <div className="divider"></div>

                    <div className="menu-activated-on-click">
                        <div className="os_menu">
                            <ul id="menu-side-menu" className="menu">
                                <li id="menu-item-316"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-316">
                                    <a href="#" ref="menuAnchor" onClick={this.anchorClickHandler}>Videos</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-1365"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1365">
                                            <a href="/strategies">Attack Strategies</a></li>
                                        <li id="menu-item-332"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-332">
                                            <a href="/base-layouts">Base Layouts</a></li>
                                        <li id="menu-item-528"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">
                                            <a href="/tutorials">Tutorials</a></li>
                                        <li id="menu-item-1420"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1420">
                                            <a href="/tips-and-tricks">Tips & Tricks</a></li>
                                    </ul>
                                </li>
                                <li id="menu-item-253"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-253">
                                    <a href="/top-clans" ref="menuAnchor" onClick={this.anchorClickHandler}>Top Clans</a>
                                </li>
                                <li id="menu-item-312"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-312">
                                    <a href="/top-players" ref="menuAnchor" onClick={this.anchorClickHandler}>Top Players</a>
                                </li>
                                <li id="menu-item-301"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-301">
                                    <a href="/builders" ref="menuAnchor" onClick={this.anchorClickHandler}>Builders</a>
                                </li>
                                <li id="menu-item-311"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-311">
                                    <a href="/blog" ref="menuAnchor" onClick={this.anchorClickHandler}>Update & News</a>
                                </li>
                                <li id="menu-item-305"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-305">
                                    <a href="/about" ref="menuAnchor" onClick={this.anchorClickHandler}>About</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="divider"></div>


                    <div className="zilla-social size-32px">
                        <SocialIcon href="http://www.facebook.com/" class="Facebook" pixelWidth="32" img="Facebook.png"/>
                        <SocialIcon href="http://www.facebook.com/" class="LinkedIn" pixelWidth="32" img="LinkedIn.png"/>
                        <SocialIcon href="http://www.facebook.com/" class="Pinterest" pixelWidth="32" img="Pinterest.png"/>
                        <SocialIcon href="http://www.facebook.com/" class="Twitter" pixelWidth="32" img="Twitter.png"/>
                    </div>


                    <div className="under-menu-sidebar-wrapper">
                        <aside id="text-6"
                               className="widget-1 widget-first widget-last widget-odd ads_menu_placeholder_widget widget widget_text">
                            <div className="textwidget"><h4>Place for ad</h4>
                                <p>Flexible Size</p></div>
                        </aside>
                    </div>

                </div>
            </div>
        )
    }

}

export default MenuBlock;
