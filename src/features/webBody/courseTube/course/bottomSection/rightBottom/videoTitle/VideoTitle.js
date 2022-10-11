import { useContext } from 'react';
import { CourseContext } from '../../../Course';

function VideoTitle() {
  const { videoLink, videoTitle } = useContext(CourseContext);

  return (
    <a href={videoLink} target="_blank" rel="noopener noreferrer">
      <h2>{videoTitle}</h2>
    </a>
  );
}

export default VideoTitle;
