import { useContext } from 'react';
import { CourseContext } from '../../../Course';
import Verified from './dependencies/Verified';

function ChannelDetails() {
  const { channelLink, channelName } = useContext(CourseContext);

  return (
    <a href={channelLink} target="_blank" rel="noopener noreferrer">
      <div className="channel-details">
        <small>{channelName}</small>
        <Verified />
      </div>
    </a>
  );
}

export default ChannelDetails;
