import Course from '../courses/course/Course';
import Instructor from '../instructors/instructor/Instructor';
import coursesData from '../../../data/coursesData';
import PropTypes from 'prop-types';

function List({ target }) {
  const instructorsList = () => {
    const list = coursesData.instructors.map((instructor) => {
      const { instructorName } = instructor;
      const imgSrc = `/img/instructors/${instructorName}/logo.jpg`;
      return (
        <Instructor
          key={instructorName}
          instructorLogo={imgSrc}
          instructorAlt={instructorName}
          instructorName={instructorName}
        />
      );
    });

    return list;
  };

  const coursesList = () => {
    const list = coursesData.logos.map((course) => {
      const imgSrc = `/img/${course}.png`;
      return (
        <Course
          key={course}
          courseLogo={imgSrc}
          courseAlt={course}
          courseName={course}
        />
      );
    });

    return list;
  };

  const list = target === 'courses' ? coursesList() : instructorsList();

  return <>{list}</>;
}

List.propTypes = {
  target: PropTypes.string.isRequired,
};

export default List;
