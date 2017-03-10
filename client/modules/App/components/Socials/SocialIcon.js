import React from 'react'

class SocialIcon extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <a className={this.props.class} href={this.props.href}>
                <img src={`/static/images/socialicons/${this.props.pixelWidth}px/${this.props.img}`} alt={this.props.alt}/>
            </a>
        )
    }
}

SocialIcon.propTypes = {
    class: React.PropTypes.string,
    href: React.PropTypes.string,
    img: React.PropTypes.string,
    alt: React.PropTypes.string
};

SocialIcon.defaultProps = {
    href: '#',
    pixelWidth: 32
};

export default SocialIcon
