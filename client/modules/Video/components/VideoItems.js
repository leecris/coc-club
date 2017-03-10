import React from 'react'

// Import Components
import VideoTeaser from './VideoTeaser'

class VideoItems extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render () {
        const { items } = this.props
        let videos = items.map(video => <VideoTeaser key={video.id} id={video.id} title={video.title} description={video.description} thumbnail={video.thumbnail} videoURL={video.videoURL}/>)

        return (
          <div id="primary-content" data-page-id="407" className="index-isotope v3 " data-layout-mode="masonry" ref="isotopeContainer">
            {videos}
          </div>
        )
    }
}

export default VideoItems
