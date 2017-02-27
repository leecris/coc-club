import React from 'react'
import SocialShare from '../Socials/SocialShare'

class VideoTeaser extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props);
        let baseUrl = window.location.protocol + '//' + window.location.hostname + '/';
        return (
            <div className="item-isotope filter-cat-6  format-standard " data-post-id={this.props.id} data-total-likes="3199" data-total-views="34,616">
                <article id={`post-${this.props.id}`}
                         className="pluto-post-box post-321 post type-post status-publish format-video has-post-thumbnail hentry category-post-format-video tag-video tag-youtube post_format-post-format-video">
                    <div className="post-body">
                        <div className="post-top-share">
                            <i className="fa os-icon-plus share-activator-icon share-activator"></i>
                            <span className="share-activator-label share-activator caption">Share</span>
                            <div className="os_social-head-w">
                                <div className="os_social">
                                    <SocialShare coreLink="http://www.facebook.com/sharer.php"
                                                 postLink={baseUrl} anchorClass="os_social_facebook_share"
                                                 imgSrc="/images/socialicons/facebook.png"/>
                                    <a className="os_social_twitter_share"
                                       href="http://twitter.com/share?url=http://pluto.pinsupreme.com/youtube-video-embed/&amp;text=YouTube+video+embed"
                                       target="_blank"><img
                                        src="http://pluto.pinsupreme.com/wp-content/themes/pluto-by-osetin/assets/images/socialicons/twitter.png"
                                        title="Twitter" className="os_social"
                                        alt="Tweet about this on Twitter"/></a><a
                                    className="os_social_pinterest_share" data-pin-custom="true"
                                    target="_blank"
                                    href="//www.pinterest.com/pin/create/button/?url=http://pluto.pinsupreme.com/youtube-video-embed/&amp;media=http://pluto.pinsupreme.com/wp-content/uploads/2014/04/AdobeStock_114425493.jpg&amp;description=YouTube+video+embed"><img
                                    src="/images/socialicons/pinterest.png"
                                    title="Pinterest" className="os_social" alt="Pin on Pinterest"/></a><a
                                    className="os_social_linkedin_share"
                                    href="http://www.linkedin.com/shareArticle?mini=true&amp;url=http://pluto.pinsupreme.com/youtube-video-embed/"
                                    target="_blank"><img
                                    src="/images/socialicons/linkedin.png"
                                    title="Linkedin" className="os_social" alt="Share on LinkedIn"/></a><a
                                    className="os_social_google_share"
                                    href="https://plus.google.com/share?url=http://pluto.pinsupreme.com/youtube-video-embed/"
                                    target="_blank"><img
                                    src="/images/socialicons/google.png"
                                    title="Google+" className="os_social"
                                    alt="Share on Google+"/></a><a className="os_social_email_share"
                                                                   href="mailto:?Subject=YouTube+video+embed&amp;Body=%20http://pluto.pinsupreme.com/youtube-video-embed/"><img
                                    src="/images/socialicons/email.png"
                                    title="Email" className="os_social"
                                    alt="Email this to someone"/></a><a
                                    className="os_social_vk_share"
                                    href="http://vkontakte.ru/share.php?url=http://pluto.pinsupreme.com/youtube-video-embed/"
                                    target="_blank"><img
                                    src="/images/socialicons/vkontakte.png"
                                    title="Vkontakte" className="os_social"
                                    alt="Share on Vkontakte"/></a><a className="os_social_ok_share"
                                                                     href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=http://pluto.pinsupreme.com/youtube-video-embed/"
                                                                     target="_blank"><img
                                    src="/images/socialicons/ok.png"
                                    title="Odnoklassniki" className="os_social"
                                    alt="Share on Odnoklassniki"/></a></div>
                            </div>
                        </div>
                        <div className="post-video-box post-media-body" data-featured-image-url="">
                            <div id="video-E9dB0dR9yAI" className="arve-wrapper alignnone"
                                 data-arve-mode="normal" data-arve-host="youtube" itemScope=""
                                 itemType="http://schema.org/VideoObject">
                                <div className="arve-embed-container">
                                    <meta itemProp="embedURL"
                                          content={this.props.videoURL}/>
                                    <iframe className="arve-video fitvidsignore"
                                            sandbox="allow-scripts allow-same-origin allow-popups"
                                            allowFullScreen="" frameBorder="0" scrolling="no"
                                            src={this.props.videoURL}></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="post-content-body">
                            <h4 className="post-title entry-title"><a
                                href="http://pluto.pinsupreme.com/youtube-video-embed/">{this.props.title}</a></h4>
                            <div className="post-content entry-summary">{this.props.description}
                                <div className="read-more-link"><a
                                    href="http://pluto.pinsupreme.com/youtube-video-embed/">Read
                                    More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="post-meta entry-meta">


                        <ul className="post-categories">
                            <li><a href="http://pluto.pinsupreme.com/category/post-format-video/"
                                   rel="category tag">Video</a></li>
                        </ul>
                        <div className="meta-date">
                            <i className="fa os-icon-clock-o"></i>
                            <time className="entry-date updated"
                                  dateTime="2014-04-26T22:02:56+00:00">Apr 26
                            </time>
                        </div>


                        <div className="meta-like">
                            <a href="#" className=" os-like-button osetin-vote-trigger  osetin-vote-not-voted" data-has-voted-label="" data-not-voted-label="" data-post-id="321" data-vote-action="vote" data-votes-count="215">
                                <span className="os-like-button-i">
                                    <span className="os-like-button-icon"><i className="os-icon os-icon-heart"></i></span>
                                    <span className="os-like-button-label osetin-vote-action-label"></span>
                                    <span className="os-like-button-sub-label osetin-vote-count ">215</span>
                                </span>
                            </a></div>


                    </div>
                </article>
            </div>
        )
    }
}

export default VideoTeaser
