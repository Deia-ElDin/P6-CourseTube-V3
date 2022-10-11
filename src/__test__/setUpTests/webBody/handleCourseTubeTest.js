import createElements from '../createElements';

const handleCourseTubeTest = ({ infos, videoIndex }) => {
  const [
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
  ] = createElements({
    testCoursetubePage: true,
    videoIndex: videoIndex >= 0 ? videoIndex : infos.videoIndex,
    topSection: true,
    topSectionAnchorTag: true,
    videoImg: true,
    videoDuration: infos.courseDuration,
    bottomSection: true,
    leftBottom: true,
    leftBottomAnchorTag: true,
    channelLogo: true,
    rightBottom: true,
    videoTitleAnchorTag: true,
    videoTitle: true,
    channelDetailsAnchorTag: true,
    channelName: infos.instructorName,
    verifiedIcon: true,
    videoDetails: infos.courseDetails,
  });

  expect(topSection).toBeInTheDocument();
  expect(topSectionAnchorTag).toHaveAttribute('href', infos.courseLink);
  expect(videoImg).toHaveAttribute('src', infos.courseImgSrc);
  expect(videoImg).toHaveAttribute('alt', infos.courseImgAlt);
  expect(videoDuration).toBeInTheDocument();

  expect(bottomSection).toBeInTheDocument();
  expect(leftBottom).toBeInTheDocument();
  expect(leftBottomAnchorTag).toHaveAttribute('href', infos.channelLink);
  expect(channelLogo).toHaveAttribute('src', infos.channelLogoSrc);
  expect(channelLogo).toHaveAttribute('alt', infos.channelLogoAlt);
  expect(rightBottom).toBeInTheDocument();
  expect(videoTitleAnchorTag).toHaveAttribute('href', infos.courseLink);
  expect(videoTitle).toHaveTextContent(infos.courseTitle);
  expect(channelDetailsAnchorTag).toHaveAttribute('href', infos.channelLink);
  expect(channelName).toBeInTheDocument();
  infos.verified
    ? expect(verifiedIcon).toBeInTheDocument()
    : expect(verifiedIcon).not.toBeInTheDocument();
  expect(videoDetails).toBeInTheDocument();
};

export default handleCourseTubeTest;
