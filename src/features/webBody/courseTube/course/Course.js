import { createContext } from 'react';
import TopSection from './topSection/TopSection';
import BottomSection from './bottomSection/BottomSection';
import PropTypes from 'prop-types';

export const CourseContext = createContext();

function Course({
  videoLink,
  videoImg,
  videoAlt,
  videoDuration,
  videoTitle,
  videoDetails,
  channelName,
  channelLink,
  channelImg,
  channelAlt,
  verified,
}) {
  const contextValues = {
    videoLink,
    videoImg,
    videoAlt,
    videoDuration,
    videoTitle,
    videoDetails,
    channelName,
    channelLink,
    channelImg,
    channelAlt,
    verified,
  };

  return (
    <section className="video-container" data-testid="video-container">
      <CourseContext.Provider value={contextValues}>
        <TopSection />
        <BottomSection />
      </CourseContext.Provider>
    </section>
  );
}

Course.propTypes = {
  videoLink: PropTypes.string.isRequired,
  videoImg: PropTypes.string.isRequired,
  videoAlt: PropTypes.string.isRequired,
  videoDuration: PropTypes.string.isRequired,
  channelLink: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelAlt: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired,
  videoDetails: PropTypes.string.isRequired,
};

export default Course;
