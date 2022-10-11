import { useContext } from 'react';
import { CourseContext } from '../../../Course';

function VideoDetails() {
  const { videoDetails } = useContext(CourseContext);

  return <small className="video-details">{videoDetails}</small>;
}

export default VideoDetails;
