import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import {
  DisplayAllCourses,
  SeekingCourse,
  RequiredCourse,
  RequiredInstructor,
  UserSearchValue,
} from '../webBodySlice';
import { SliderValue } from '../../header/rightHeader/rightHeaderSlice';
import { nanoid } from '@reduxjs/toolkit';
import Course from './course/Course';
import coursesData from '../../../data/coursesData';

function CourseTube() {
  const [courseTube, setCourseTube] = useState([]);
  const sliderValue = useAppSelector(SliderValue);
  const displayAllCourses = useAppSelector(DisplayAllCourses);
  const seekingCourse = useAppSelector(SeekingCourse);
  const requiredCourse = useAppSelector(RequiredCourse);
  const requiredInstructor = useAppSelector(RequiredInstructor);
  const userSearchValue = useAppSelector(UserSearchValue);

  useEffect(() => {
    function courseTubeFun(input) {
      const webBody = coursesData.instructors.map((instructor) => {
        const { instructorName, channelLink, verified, courses } = instructor;
        return courses.map((course) => {
          const {
            courseName,
            courseLink,
            courseDuration,
            courseTitle,
            courseDetails,
          } = course;
          const videoImgSrc = `/img/instructors/${instructorName}/${courseName.toLowerCase()}.webp`;
          const channelLogo = `/img/instructors/${instructorName}/logo.jpg`;
          const ID = nanoid();

          if (userSearchValue) {
            if (instructorName.toLowerCase().includes(input))
              return CourseFun();
            else if (courseName.toLowerCase().includes(input))
              return CourseFun();
            else return null;
          } else if (displayAllCourses) {
            return CourseFun();
          } else if (seekingCourse) {
            if (courseName.includes(input)) return CourseFun();
            else return null;
          } else {
            if (instructorName.includes(input)) return CourseFun();
            else return null;
          }

          function CourseFun() {
            return (
              <Course
                key={ID}
                videoLink={courseLink}
                videoImg={videoImgSrc}
                videoAlt={courseName}
                videoDuration={courseDuration}
                channelLink={channelLink}
                channelImg={channelLogo}
                channelAlt={instructorName}
                videoTitle={courseTitle}
                channelName={instructorName}
                verified={verified}
                videoDetails={courseDetails}
              />
            );
          }
        });
      });

      return webBody;
    }

    if (userSearchValue) {
      setCourseTube(courseTubeFun(userSearchValue));
    } else if (displayAllCourses) setCourseTube(courseTubeFun());
    else if (seekingCourse) setCourseTube(courseTubeFun(requiredCourse));
    else setCourseTube(courseTubeFun(requiredInstructor));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSearchValue, displayAllCourses, requiredCourse, requiredInstructor]);

  const courseTubeStyles = {
    gridTemplateColumns: `repeat(${sliderValue}, 1fr)`,
  };

  return (
    <section
      className="course-tube"
      style={courseTubeStyles}
      data-testid="coursetube-page"
    >
      {courseTube}
    </section>
  );
}

export default CourseTube;
