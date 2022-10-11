const coursesData = {
  logos: [
    'web development',
    'html',
    'css',
    'javascript',
    'sass',
    'react',
    'react testing library',
    'redux',
    'python',
  ],
  instructors: [
    {
      id: 1,
      instructorName: 'London App Brewery',
      channelLink: 'https://www.youtube.com/channel/UCVD5Vh9LhLBxp3o1vRNyf_w',
      verified: false,
      courses: [
        {
          courseName: 'web development',
          courseLink:
            'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
          courseDuration: '65:00:00',
          courseTitle: 'The Complete 2022 Web Development Bootcamp',
          courseDetails: '608,534 students',
        },
        {
          courseName: 'python',
          courseLink: 'https://www.udemy.com/course/100-days-of-code/',
          courseDuration: '60:00:00',
          courseTitle:
            '100 Days of Code: The Complete Python Pro Bootcamp for 2022',
          courseDetails: '443,380 students',
        },
      ],
    },
    {
      id: 2,
      instructorName: 'Bro Code',
      channelLink: 'https://www.youtube.com/c/BroCodez',
      verified: true,
      courses: [
        {
          courseName: 'javascript',
          courseLink: 'https://www.youtube.com/watch?v=8dWL3wF_OMw&t=12s',
          courseDuration: '8:00:00',
          courseTitle: 'JavaScript Full Course 🌐【𝙁𝙧𝙚𝙚】',
          courseDetails: '166K views • 1 month ago',
        },
        {
          courseName: 'html',
          courseLink: 'https://www.youtube.com/watch?v=HD13eq_Pmp8',
          courseDuration: '1:00:00',
          courseTitle: 'Learn HTML in 1 hour 🌎【𝙁𝙧𝙚𝙚】',
          courseDetails: '81K views • 7 months ago',
        },
        {
          courseName: 'css',
          courseLink: 'https://www.youtube.com/watch?v=wRNinF7YQqQ&t=1252s',
          courseDuration: '1:00:00',
          courseTitle: 'Learn CSS in 1 hour 🎨【𝙁𝙧𝙚𝙚】',
          courseDetails: '57K views • 7 months ago',
        },
        {
          courseName: 'html css',
          courseLink: 'https://www.youtube.com/watch?v=cyuzt1Dp8X8&t=37s',
          courseDuration: '4:55:13',
          courseTitle: 'HTML & CSS Full Course 🌎【𝙁𝙧𝙚𝙚】',
          courseDetails: `454K views • 1 year ago`,
        },
      ],
    },
    {
      id: 3,
      instructorName: 'freeCodeCamp.org',
      channelLink: 'https://www.youtube.com/c/Freecodecamp',
      verified: true,
      courses: [
        {
          courseName: 'python',
          courseLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          courseDuration: '4:26:51',
          courseTitle: 'Learn Python - Full Course for Beginners [Tutorial]',
          courseDetails: '32M views • 3 years ago',
        },
        {
          courseName: 'javascript',
          courseLink: 'https://www.youtube.com/watch?v=jS4aFq5-91M&t=26139s',
          courseDuration: '7:44:20',
          courseTitle: 'JavaScript Programming - Full Course',
          courseDetails: '1.2M views • 9 months ago',
        },
        {
          courseName: 'html css javascript',
          courseLink: 'https://www.youtube.com/watch?v=xV7S8BhIeBo',
          courseDuration: '3:25:55',
          courseTitle:
            'Portfolio Website Tutorial – Frontend Development with HTML, CSS, JavaScript',
          courseDetails: '248K views • 3 weeks ago',
        },
        {
          courseName: 'react',
          courseLink: 'https://www.youtube.com/watch?v=bMknfKXIFA8&t=338s',
          courseDuration: '11:55:28',
          courseTitle:
            "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
          courseDetails: '819K views • 3 months ago',
        },
        {
          courseName: 'sass',
          courseLink: 'https://www.youtube.com/watch?v=_a5j7KoflTs&t=974s',
          courseDuration: '2:02:59',
          courseTitle: 'Sass Tutorial for Beginners - CSS With Superpowers',
          courseDetails: '565K views • 2 years ago',
        },
      ],
    },
    {
      id: 4,
      instructorName: 'SuperSimpleDev',
      channelLink: 'https://www.youtube.com/c/SuperSimpleDev',
      verified: false,
      courses: [
        {
          courseName: 'html css',
          courseLink: 'https://www.youtube.com/watch?v=G3e-cpL7ofc&t=20973s',
          courseDuration: '6:31:24',
          courseTitle: 'HTML & CSS Full Course - Beginner to Pro (2022)',
          courseDetails: '208K views • 2 months ago',
        },
      ],
    },
    {
      id: 5,
      instructorName: 'Laith Academy',
      channelLink: 'https://www.youtube.com/channel/UCyLNhHSiEVkVwPSFKxJAfSA',
      verified: false,
      courses: [
        {
          courseName: 'react testing library',
          courseLink: 'https://www.youtube.com/watch?v=04BBgg8zgWo&t=1273s',
          courseDuration: '2:26:48',
          courseTitle: 'React Testing Library Crash Course',
          courseDetails: '16K views • 5 months ago',
        },
      ],
    },
    {
      id: 6,
      instructorName: 'Dave Gray',
      channelLink: 'https://www.youtube.com/c/DaveGrayTeachesCode',
      verified: false,
      courses: [
        {
          courseName: 'react',
          courseLink: 'https://www.youtube.com/watch?v=RVFAyFWO4go&t=749s',
          courseDuration: '8:49:05',
          courseTitle:
            'React JS Full Course for Beginners | Complete All-in-One Tutorial | 9 Hours',
          courseDetails: '260K views • 10 months ago',
        },
        {
          courseName: 'redux',
          courseLink: 'https://www.youtube.com/watch?v=NqzdVN2tyvQ&t=3895s',
          courseDuration: '3:59:39',
          courseTitle:
            'React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial',
          courseDetails: '58K views • 2 months ago',
        },
      ],
    },
  ],
  colors: [
    {
      themeName: 'light',
      colors: ['#fff', '#dedede', '#606060', '#0000ffb3'],
    },
    {
      themeName: 'blue',
      colors: ['#f0f0f0', '#FF7700', '#e04d01', '#251e5c'],
    },
    {
      themeName: 'lightBrown',
      colors: ['#FCFFE7', '#DEA057', '#CE9461', '#8E3200'],
    },
    {
      themeName: 'dark',
      colors: ['#b2becd', '#6c7983', '#27AE60', '#000'],
    },
  ],
};

export default coursesData;
