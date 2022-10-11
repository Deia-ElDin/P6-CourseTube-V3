import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainClass: '',
  secondaryClass: '',
  displayCourseTube: true,
  displayContactMe: false,
  displayAllCourses: true,
  seekingCourse: false,
  requiredCourse: '',
  seekingInstructor: false,
  requiredInstructor: '',
  userSearchValue: '',
};

export const webBodySlice = createSlice({
  name: 'webBody',
  initialState,
  reducers: {
    handleWebBodySetUp: (state, action) => {
      state.mainClass = action.payload.mainClass;
      state.secondaryClass = action.payload.secondaryClass;
    },
    handleContactMeBtnClick: (state) => {
      state.displayCourseTube = false;
      state.displayContactMe = true;
    },
    handleSidebarHomeClick: (state) => {
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayAllCourses = true;
      state.seekingCourse = false;
      state.seekingInstructor = false;
      state.userSearchValue = '';
    },
    handleSidebarCourseClick: (state, action) => {
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayAllCourses = false;
      state.seekingInstructor = false;
      state.userSearchValue = '';
      state.seekingCourse = true;
      state.requiredCourse = action.payload;
    },
    handleSidebarInstructorClick: (state, action) => {
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayAllCourses = false;
      state.seekingCourse = false;
      state.userSearchValue = '';
      state.seekingInstructor = true;
      state.requiredInstructor = action.payload;
    },
    handleCloseBtnClick: (state) => {
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayAllCourses = true;
    },
    handleUserSearch: (state, action) => {
      state.userSearchValue = action.payload;
      state.displayCourseTube = true;
      state.displayContactMe = false;
      state.displayAllCourses = false;
    },
  },
});

export const MainClass = (state) => state.webBody.mainClass;
export const SecondaryClass = (state) => state.webBody.secondaryClass;
export const DisplayCourseTube = (state) => state.webBody.displayCourseTube;
export const DisplayContactMe = (state) => state.webBody.displayContactMe;
export const DisplayAllCourses = (state) => state.webBody.displayAllCourses;
export const SeekingCourse = (state) => state.webBody.seekingCourse;
export const RequiredCourse = (state) => state.webBody.requiredCourse;
export const SeekingInstructor = (state) => state.webBody.seekingInstructor;
export const RequiredInstructor = (state) => state.webBody.requiredInstructor;
export const UserSearchValue = (state) => state.webBody.userSearchValue;

export const {
  handleWebBodySetUp,
  handleContactMeBtnClick,
  handleSidebarHomeClick,
  handleSidebarCourseClick,
  handleSidebarInstructorClick,
  handleCloseBtnClick,
  handleUserSearch,
  // handleUserSearchValue,
} = webBodySlice.actions;

export default webBodySlice.reducer;
