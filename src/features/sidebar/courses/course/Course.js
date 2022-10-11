import { useAppDispatch } from '../../../../hooks/hooks';
import { handleSidebarCourseClick } from '../../../webBody/webBodySlice';
import PropTypes from 'prop-types';

function Course({ courseName, courseLogo, courseAlt }) {
  const dispatch = useAppDispatch();

  function cap(inputName) {
    let capIndex = [0];
    let capName = '';
    for (let i = 0; i < inputName.length; i++) {
      if (inputName[i] === ' ') {
        capIndex.push(i + 1);
      }
    }
    for (let i = 0; i < inputName.length; i++) {
      if (capIndex.includes(i)) {
        capName += inputName[i].toUpperCase();
      } else {
        capName += inputName[i];
      }
    }
    return capName;
  }

  return (
    <article
      className="course"
      id={courseName}
      onClick={() => dispatch(handleSidebarCourseClick(courseName))}
    >
      <figure className="logo">
        <img
          className="sidebar-img"
          src={process.env.PUBLIC_URL + courseLogo}
          alt={courseAlt}
        />
      </figure>
      <h4 className="name">{cap(courseName)}</h4>
    </article>
  );
}

Course.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseLogo: PropTypes.string.isRequired,
  courseAlt: PropTypes.string.isRequired,
};

export default Course;
