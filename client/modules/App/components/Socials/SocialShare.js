import React from 'react'

class SocialShare extends React.Component {
    constructor(props,context) {
        super(props,context)
    }
    render() {
        return (
            <a className={this.props.anchorClass} href={`${this.props.coreLink}?u=${this.props.postLink}`}
                target="_blank">
                <img src={this.props.img}
                title={this.props.imgTitle} className={this.props.imgSrc} alt={this.props.imgAlt}/>
            </a>
        )
    }
}

SocialShare.defaultProps = {
    coreLink: 'http://www.facebook.com/sharer.php',
    postLink: '',
    anchorClass: 'os_social_share',
    target: '_blank',
    imgClass: 'os_social',
    imgTitle: 'Social Share',
    imgAlt: 'Share on social'
};

export default SocialShare