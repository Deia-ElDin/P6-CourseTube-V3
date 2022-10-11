import { screen, within } from '@testing-library/react';

const createElements = ({
  // .... Header .... //
  // LeftHeader
  leftHeaderSection,
  toggleBtn,
  toggleBtnIcon,
  logo,
  name,
  // MiddleHeader
  middleHeaderSection,
  searchArrowBtn,
  searchLabel,
  searchInput,
  searchBtn,
  searchBtnIcon,
  micBtn,
  micOffIcon,
  micOnIcon,
  // RightHeader
  rightHeaderSection,
  optionsArrowBtn,
  themeBtn,
  themeBtnIcon,
  themeBlocks,
  colorDivs,
  gridBtn,
  gridBtnIcon,
  slider,
  contactMeBtn,
  contactMeBtnIcon,
  rightHeaderCloseBtn,
  rightHeaderCloseBtnIcon,
  // Mini Btns
  miniSearchBtn,
  miniSearchBtnIcon,
  miniOptionsBtn,
  miniOptionsBtnIcon,

  // .... Sidebar .... //
  sidebarSection,
  sidebarArrowBtn,
  homeSection,
  homeIcon,
  homeTitle,
  coursesSection,
  coursesIcon,
  coursesTitle,
  courses,
  instructorsSection,
  instructorsIcon,
  instructorsTitle,
  instructors,
  footer,

  // .... WebBody .... //
  webBodySection,
  // CourseTube
  coursetubePage,
  videoIndex,
  videoContainers,
  topSection,
  topSectionAnchorTag,
  videoImg,
  videoDuration,
  bottomSection,
  leftBottom,
  leftBottomAnchorTag,
  channelLogo,
  rightBottom,
  videoTitleAnchorTag,
  videoTitle,
  channelDetailsAnchorTag,
  channelName,
  verifiedIcon,
  videoDetails,

  // ContactMe
  contactMePage,
  testContactMePage,
  contactIndex,
  contactMeCloseBtn,
  contactMeCloseBtnIcon,
  leftContactSection,
  contactBlocks,
  contactTitle,
  contactText,
  linkedInAnchorBtn,
  linkedInAnchorBtnIcon,
  githubAnchorBtn,
  githubAnchorBtnIcon,
  rightContactForm,
  nameLabel,
  nameInput,
  emailLabel,
  emailInput,
  subjectLabel,
  subjectInput,
  messageLabel,
  messageTextArea,
  submitBtn,
}) => {
  const elementsArray = [];
  // .... Header .... //
  // LeftHeader
  if (leftHeaderSection) {
    elementsArray.push(screen.queryByTestId('left-header'));
  }
  if (toggleBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: /toggle button/i,
      })
    );
  }
  if (toggleBtnIcon) {
    elementsArray.push(screen.queryByTestId(/toggle-btn-icon/i));
  }
  if (logo) {
    elementsArray.push(
      screen.queryByRole('img', {
        name: /coursetube logo/i,
      })
    );
  }
  if (name) {
    elementsArray.push(
      screen.queryByRole('heading', {
        name: /coursetube/i,
      })
    );
  }

  // MiddleHeader
  if (middleHeaderSection) {
    elementsArray.push(screen.queryByTestId('middle-header'));
  }
  if (searchArrowBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Search arrow button',
      })
    );
  }
  if (searchLabel) {
    elementsArray.push(screen.queryByText(/search:/i));
  }
  if (searchInput) {
    elementsArray.push(screen.queryByPlaceholderText('Search'));
  }
  if (searchBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: /search button/i,
      })
    );
  }
  if (searchBtnIcon) {
    elementsArray.push(screen.queryByTestId(/search-btn-icon/i));
  }
  if (micBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Mic',
      })
    );
  }
  if (micOffIcon) {
    elementsArray.push(screen.queryByTestId(/mic-off/i));
  }
  if (micOnIcon) {
    elementsArray.push(screen.queryByTestId(/mic-on/i));
  }

  // RightHeader
  if (rightHeaderSection) {
    elementsArray.push(screen.queryByTestId('right-header'));
  }
  if (optionsArrowBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Options arrow button',
      })
    );
  }
  if (themeBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: /select theme/i,
      })
    );
  }
  if (themeBtnIcon) {
    elementsArray.push(screen.queryByTestId(/theme-btn-icon/i));
  }
  if (themeBlocks) {
    elementsArray.push(screen.queryAllByTestId('theme-block'));
  }
  if (colorDivs) {
    elementsArray.push(screen.queryAllByTestId(/color-div/i));
  }
  if (gridBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: /select grid/i,
      })
    );
  }
  if (gridBtnIcon) {
    elementsArray.push(screen.queryByTestId(/grid-btn-icon/i));
  }
  if (slider) {
    elementsArray.push(screen.queryByRole('slider'));
  }
  if (contactMeBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: /contact me/i,
      })
    );
  }
  if (contactMeBtnIcon) {
    elementsArray.push(screen.queryByTestId(/contact-btn-icon/i));
  }
  if (rightHeaderCloseBtn) {
    elementsArray.push(screen.queryByTestId('right-header-close-btn'));
  }
  if (rightHeaderCloseBtnIcon) {
    elementsArray.push(screen.queryByTestId(/right-header-close-btn-icon/i));
  }

  // Mini Btns
  if (miniSearchBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Search',
      })
    );
  }
  if (miniSearchBtnIcon) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'mini-search-btn-icon',
      })
    );
  }
  if (miniOptionsBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Options',
      })
    );
  }
  if (miniOptionsBtnIcon) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'mini-options-btn-icon',
      })
    );
  }

  // .... Sidebar .... //
  if (sidebarSection) {
    elementsArray.push(screen.queryByTestId('sidebar'));
  }
  if (sidebarArrowBtn) {
    elementsArray.push(
      screen.queryByRole('button', {
        name: 'Sidebar arrow btn',
      })
    );
  }
  if (homeSection) {
    elementsArray.push(screen.queryByRole('region', { name: /home/i }));
  }
  if (homeIcon) {
    elementsArray.push(screen.queryByTestId(/home-icon/i));
  }
  if (homeTitle) {
    elementsArray.push(screen.queryAllByTestId(/section-title/i)[0]);
  }
  if (coursesSection) {
    elementsArray.push(screen.queryByRole('region', { name: /courses/i }));
  }
  if (coursesIcon) {
    elementsArray.push(screen.queryByTestId(/courses-icon/i));
  }
  if (coursesTitle) {
    elementsArray.push(screen.queryAllByTestId(/section-title/i)[1]);
  }
  if (courses) {
    elementsArray.push(
      within(screen.queryByRole('region', { name: /courses/i })).queryAllByRole(
        'article'
      )
    );
  }
  if (instructorsSection) {
    elementsArray.push(
      screen.queryByRole('region', {
        name: /instructors/i,
      })
    );
  }
  if (instructorsIcon) {
    elementsArray.push(screen.queryByTestId(/instructors-icon/i));
  }
  if (instructorsTitle) {
    elementsArray.push(screen.queryAllByTestId(/section-title/i)[2]);
  }
  if (instructors) {
    elementsArray.push(
      within(
        screen.queryByRole('region', { name: /instructors/i })
      ).queryAllByRole('article')
    );
  }
  if (footer) {
    elementsArray.push(screen.queryByText(/©/i));
  }

  // .... WebBody .... //
  if (webBodySection) {
    elementsArray.push(screen.getByTestId('web-body'));
  }
  // CourseTube
  if (coursetubePage) {
    elementsArray.push(screen.queryByTestId(/coursetube-page/i));
  }
  if (videoContainers) {
    elementsArray.push(screen.queryAllByTestId(/video-container/i));
  }
  if (topSection) {
    const topSectionElement = screen.getAllByTestId(/top-section/i)[videoIndex];
    elementsArray.push(topSectionElement);

    if (topSectionAnchorTag) {
      elementsArray.push(within(topSectionElement).getByRole('link'));
    }
    if (videoImg) {
      elementsArray.push(within(topSectionElement).getByRole('img'));
    }
    if (videoDuration) {
      elementsArray.push(within(topSectionElement).getByText(videoDuration));
    }
  }
  if (bottomSection) {
    const bottomSectionElement =
      screen.getAllByTestId(/bottom-section/i)[videoIndex];
    elementsArray.push(bottomSectionElement);

    // Left Bottom
    if (leftBottom) {
      const leftBottomElement =
        screen.getAllByTestId(/left-bottom/i)[videoIndex];

      elementsArray.push(leftBottomElement);

      if (leftBottomAnchorTag) {
        elementsArray.push(within(leftBottomElement).getByRole('link'));
      }
      if (channelLogo) {
        elementsArray.push(within(bottomSectionElement).getByRole('img'));
      }
    }

    // Right Bottom
    if (rightBottom) {
      const rightBottomElement =
        screen.getAllByTestId(/right-bottom/i)[videoIndex];
      elementsArray.push(rightBottomElement);

      if (videoTitleAnchorTag || channelDetailsAnchorTag) {
        const rightBottomAnchorTagElements =
          within(rightBottomElement).getAllByRole('link');
        const videoTitleAnchorTagElement = rightBottomAnchorTagElements[0];
        const channelDetailsAnchorTagElement = rightBottomAnchorTagElements[1];

        // Video Title
        if (videoTitleAnchorTag) {
          elementsArray.push(videoTitleAnchorTagElement);
          if (videoTitle) {
            elementsArray.push(
              within(videoTitleAnchorTagElement).getByRole('heading')
            );
          }
        }

        // Channel Details
        if (channelDetailsAnchorTag) {
          elementsArray.push(channelDetailsAnchorTagElement);
          if (channelName) {
            elementsArray.push(
              within(channelDetailsAnchorTagElement).getByText(channelName)
            );
          }
          if (verifiedIcon) {
            elementsArray.push(
              within(channelDetailsAnchorTagElement).queryByTestId(
                /verified-icon/i
              )
            );
          }
        }
      }

      if (videoDetails) {
        elementsArray.push(within(rightBottomElement).getByText(videoDetails));
      }
    }
  }

  // Contact Me
  if (contactMePage) {
    elementsArray.push(screen.queryByTestId(/contact-page/i));
  }
  if (testContactMePage) {
    const leftContactElement = screen.queryByRole('region', {
      name: /contact details/i,
    });
    const rightContactElement = screen.queryByRole('form', { name: /form/i });

    if (leftContactElement) {
      const contactBlockElements =
        within(leftContactElement).queryAllByRole('article');

      const anchorBtnElements =
        within(leftContactElement).queryAllByRole('link');

      // Left Contact
      if (leftContactSection) {
        elementsArray.push(leftContactElement);
      }
      if (contactBlocks) {
        elementsArray.push(contactBlockElements);
      }
      if (contactTitle) {
        elementsArray.push(
          within(contactBlockElements[contactIndex]).getByText(contactTitle)
        );
      }
      if (contactText) {
        elementsArray.push(
          within(contactBlockElements[contactIndex]).getByText(contactText)
        );
      }
      if (linkedInAnchorBtn) {
        elementsArray.push(anchorBtnElements[0]);
      }
      if (linkedInAnchorBtnIcon) {
        elementsArray.push(screen.getByTestId(/linkedin-btn-icon/i));
      }
      if (githubAnchorBtn) {
        elementsArray.push(anchorBtnElements[1]);
      }
      if (githubAnchorBtnIcon) {
        elementsArray.push(screen.getByTestId(/github-btn-icon/i));
      }
    }

    if (rightContactElement) {
      // Right Contact
      if (rightContactForm) {
        elementsArray.push(rightContactElement);
      }
      if (nameLabel) {
        elementsArray.push(screen.getByText(/your name:/i));
      }
      if (nameInput) {
        elementsArray.push(screen.getByPlaceholderText('Your Name'));
      }
      if (emailLabel) {
        elementsArray.push(screen.getByText(/your email:/i));
      }
      if (emailInput) {
        elementsArray.push(screen.getByPlaceholderText('Your Email'));
      }
      if (subjectLabel) {
        elementsArray.push(screen.getByText(/subject:/i));
      }
      if (subjectInput) {
        elementsArray.push(screen.getByPlaceholderText('Subject'));
      }
      if (messageLabel) {
        elementsArray.push(screen.getByText(/your message:/i));
      }
      if (messageTextArea) {
        elementsArray.push(screen.getByPlaceholderText('Your Message'));
      }
      if (submitBtn) {
        elementsArray.push(screen.getByRole('button', { name: /say hello/i }));
      }
    }

    // Close Btn
    if (contactMeCloseBtn) {
      elementsArray.push(screen.queryByTestId('contact-close-btn'));
    }
    if (contactMeCloseBtnIcon) {
      elementsArray.push(screen.queryByTestId(/contact-close-btn-icon/i));
    }
  }

  return elementsArray;
};

export default createElements;
