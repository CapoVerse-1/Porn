import React from 'react';
import './VideoCard.css';

function VideoCard({ title }) {
  // In the future, this could take props like thumbnailUrl, duration, etc.
  return (
    <div className="video-card">
      <div className="video-card-thumbnail-placeholder"></div>
      <h4 className="video-card-title">{title || 'Generated Video'}</h4>
      {/* Add more details like duration, tags later */}
    </div>
  );
}

export default VideoCard; 