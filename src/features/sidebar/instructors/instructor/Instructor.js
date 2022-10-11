import { useAppDispatch } from '../../../../hooks/hooks';
import { handleSidebarInstructorClick } from '../../../webBody/webBodySlice';
import PropTypes from 'prop-types';

function Instructor({ instructorName, instructorLogo, instructorAlt }) {
  const dispatch = useAppDispatch();

  return (
    <article
      className="instructor"
      id={instructorName}
      onClick={() => dispatch(handleSidebarInstructorClick(instructorName))}
    >
      <figure className="logo">
        <img
          className="sidebar-img"
          src={process.env.PUBLIC_URL + instructorLogo}
          alt={instructorAlt}
        />
      </figure>
      <h4 className="name">{instructorName}</h4>
    </article>
  );
}

Instructor.propTypes = {
  instructorName: PropTypes.string.isRequired,
  instructorLogo: PropTypes.string.isRequired,
  instructorAlt: PropTypes.string.isRequired,
};

export default Instructor;
