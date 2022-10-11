import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoLink: '',
  videoImg: '',
  videoAlt: '',
  videoDuration: '',
  channelLink: '',
  channelImg: '',
  channelAlt: '',
  videoTitle: '',
  channelName: '',
  verified: '',
  videoDetails: '',
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    handleCourse: (state, action) => {
      state.videoLink = action.payload.videoLink;
      state.videoImg = action.payload.videoImg;
      state.videoAlt = action.payload.videoAlt;
      state.videoDuration = action.payload.videoDuration;
      state.channelLink = action.payload.channelLink;
      state.channelImg = action.payload.channelImg;
      state.channelAlt = action.payload.channelAlt;
      state.videoTitle = action.payload.videoTitle;
      state.channelName = action.payload.channelName;
      state.verified = action.payload.verified;
      state.videoDetails = action.payload.videoDetails;
    },
    resetHandleCourse: (state) => {
      state.videoLink = '';
      state.videoImg = '';
      state.videoAlt = '';
      state.videoDuration = '';
      state.channelLink = '';
      state.channelImg = '';
      state.channelAlt = '';
      state.videoTitle = '';
      state.channelName = '';
      state.verified = '';
      state.videoDetails = '';
    },
  },
});

// export const CourseState = (state) => state.course;
// export const VideoLink = (state) => state.course.videoLink;
// export const VideoImg = (state) => state.course.videoImg;
// export const VideoAlt = (state) => state.course.videoAlt;
// export const VideoDuration = (state) => state.course.videoDuration;
// export const ChannelLink = (state) => state.course.channelLink;
// export const ChannelImg = (state) => state.course.channelImg;
// export const ChannelAlt = (state) => state.course.channelAlt;
// export const VideoTitleState = (state) => state.course.videoTitle;
// export const ChannelName = (state) => state.course.channelName;
// export const Verifiedstate = (state) => state.course.verified;
// export const VideoDetailsState = (state) => state.course.videoDetails;

// export const { handleCourse, resetHandleCourse } = courseSlice.actions;

export default courseSlice.reducer;
