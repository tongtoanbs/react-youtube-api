import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const snippet = video.snippet;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={snippet.thumbnails.default.url} 
                         alt={snippet.title} 
                         className="media-object" />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">{snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem