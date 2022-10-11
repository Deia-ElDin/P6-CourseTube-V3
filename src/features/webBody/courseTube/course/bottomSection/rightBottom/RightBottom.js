import VideoTitle from './videoTitle/VideoTitle';
import ChannelDetails from './channelDetails/ChannelDetails';
import VideoDetails from './videoDetails/VideoDetails';

function RightBottom() {
  return (
    <section className="right-bottom" data-testid="right-bottom">
      <VideoTitle />
      <ChannelDetails />
      <VideoDetails />
    </section>
  );
}

export default RightBottom;
