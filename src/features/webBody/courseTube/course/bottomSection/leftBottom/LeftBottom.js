import { useContext } from 'react';
import { CourseContext } from '../../Course';

function LeftBottom() {
  const { channelLink, channelImg, channelAlt } = useContext(CourseContext);

  return (
    <section className="left-bottom" data-testid="left-bottom">
      <a href={channelLink} target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + channelImg} alt={channelAlt} />
      </a>
    </section>
  );
}

export default LeftBottom;
