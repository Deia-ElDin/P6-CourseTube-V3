import { useContext } from 'react';
import { CourseContext } from '../Course';

function TopSection() {
  const { videoLink, videoImg, videoAlt, videoDuration } =
    useContext(CourseContext);

  return (
    <figure className="top-section" data-testid="top-section">
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + videoImg} alt={videoAlt} />
        <small>{videoDuration}</small>
      </a>
    </figure>
  );
}

export default TopSection;
