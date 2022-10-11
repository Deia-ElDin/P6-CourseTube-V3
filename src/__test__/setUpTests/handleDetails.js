import coursesData from '../../data/coursesData';

const handleDetails = ({
  target,
  instructorIndex,
  courseIndex,
  requiredInstructor,
  requiredCourse,
}) => {
  let infos;

  if (target === 'logos') infos = coursesData.logos.length;
  else if (target === 'instructors') infos = coursesData.instructors.length;
  else if (target === 'courses') infos = getTotalCourses();
  else if (target === 'courses/instructorIndex')
    infos = getTotalCoursesForInstructor(instructorIndex);
  else if (target === 'courses/instructorName')
    infos = getTotalCoursesForInstructor(requiredInstructor);
  else if (target === 'coursesByName')
    infos = getTotalCoursesByName(requiredCourse);
  else infos = handleRenderDetails(instructorIndex, courseIndex);

  return infos;
};

function getTotalCourses() {
  let totalCourses = 0;
  coursesData.instructors.forEach((instructor) => {
    return (totalCourses += instructor.courses.length);
  });

  return totalCourses;
}

function getTotalCoursesForInstructor(instructorIndex) {
  let totalCourses = 0;

  if (instructorIndex >= 0) totalCourses = byIndex(instructorIndex);
  else if (requiredInstructor) totalCourses = byName(requiredInstructor);

  function byIndex(instructorIndex) {
    let totalCourses = 0;
    coursesData.instructors.filter((instructor, index) => {
      return index === instructorIndex
        ? (totalCourses += instructor.courses.length)
        : null;
    });

    return totalCourses;
  }

  function byName(requiredInstructor) {
    let totalCourses = 0;
    let instructorsindex;
    coursesData.instructors.filter((instructor, index) => {
      if (instructor.instructorName === requiredInstructor) {
        instructorsindex = index;
        totalCourses = instructor.courses.length;
        return [instructorsindex, totalCourses];
      } else return null;
    });

    return { instructorsindex, totalCourses };
  }

  return totalCourses;
}

function getTotalCoursesByName(requiredCourse) {
  let totalRelatedCourses = 0;
  let instructorsArray = [];
  let coursesArray = [];
  coursesData.instructors.forEach((instructor, index1) => {
    const coursesList = instructor.courses;
    coursesList.forEach((course, index2) => {
      const { courseName } = course;
      if (courseName.toLowerCase().includes(requiredCourse.toLowerCase())) {
        instructorsArray.push(index1);
        coursesArray.push(index2);
        totalRelatedCourses += 1;
      }
    });
  });

  return { totalRelatedCourses, instructorsArray, coursesArray };
}

function handleVideoIndex(instructorIndex, courseIndex) {
  let videoIndex = 0;
  const instructorArray = coursesData.instructors;

  // We get the right videoIndex if (WE ARE NOT SEARCHING)
  // if we are searching we don't have the whole videos any more
  // use this function ONLY if your are not searching

  for (let i = 0; i < instructorArray.length; i++) {
    if (i <= instructorIndex) {
      for (let j = 0; j < instructorArray[i].courses.length; j++) {
        if (i === instructorIndex && j === courseIndex) break;
        else videoIndex += 1;
      }
    } else break;
  }

  return videoIndex;
}

function handleRenderDetails(instructorIndex, courseIndex) {
  const videoIndex = handleVideoIndex(instructorIndex, courseIndex);

  const instructorPath = coursesData.instructors[instructorIndex];
  const fullPath = instructorPath.courses[courseIndex];

  const instructorName = instructorPath.instructorName;
  const courseName = fullPath.courseName;

  // Top Section
  const courseLink = fullPath.courseLink;
  const courseImgSrc = `/img/instructors/${instructorName}/${courseName.toLowerCase()}.webp`;
  const courseImgAlt = courseName;
  const courseDuration = fullPath.courseDuration;
  // Bottom Section
  const channelLink = instructorPath.channelLink;
  const channelLogoSrc = `/img/instructors/${instructorName}/logo.jpg`;
  const channelLogoAlt = instructorName;
  const courseTitle = fullPath.courseTitle;
  const verified = instructorPath.verified;
  const courseDetails = fullPath.courseDetails;

  const infos = {
    videoIndex,
    channelLink,
    courseImgSrc,
    courseImgAlt,
    courseDuration,
    channelLogoSrc,
    channelLogoAlt,
    courseLink,
    courseTitle,
    instructorName,
    verified,
    courseDetails,
  };

  return infos;
}

export default handleDetails;
