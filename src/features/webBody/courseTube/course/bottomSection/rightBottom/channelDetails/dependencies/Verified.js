import { useContext } from 'react';
import { CourseContext } from '../../../../Course';
import { BsCheckCircleFill } from 'react-icons/bs';

function Verified() {
  const { verified } = useContext(CourseContext);

  return (
    <>
      {verified && (
        <BsCheckCircleFill className="verified" data-testid="verified-icon" />
      )}
    </>
  );
}

export default Verified;
