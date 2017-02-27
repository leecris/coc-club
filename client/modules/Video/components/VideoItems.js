import React from 'react'
import ReactDOM from 'react-dom'
import PostTeaser from './VideoTeaser'

class VideoItems extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render () {
        let videoTest = this.props.videos;
        let videos = videoTest.map(video => <PostTeaser key={video.id} id={video.id} title={video.title} description={video.description} thumbnail={video.thumbnail} videoURL={video.videoURL}/>)

        return (
            <div>
                {videos}
            </div>
        )
    }
}

export default VideoItems
