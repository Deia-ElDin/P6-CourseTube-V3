import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainClass: '',
  secondaryClass: '',
  home: true,
  courses: true,
  instructors: true,
  displayArrowBtn: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    handleSidebarSetUp: (state, action) => {
      state.mainClass = action.payload.mainClass;
      state.secondaryClass = action.payload.secondaryClass;
      state.displayArrowBtn = action.payload.displayArrowBtn;
    },
    handleSidebarTitlesClick: (state, action) => {
      switch (action.payload) {
        case 'courses':
          state.courses = !state.courses;
          break;
        case 'instructors':
          state.instructors = !state.instructors;
          break;
        default:
          break;
      }
    },
  },
});

export const MainClass = (state) => state.sidebar.mainClass;
export const SecondaryClass = (state) => state.sidebar.secondaryClass;
export const CoursesState = (state) => state.sidebar.courses;
export const InstructorsState = (state) => state.sidebar.instructors;
export const DisplayArrowBtn = (state) => state.sidebar.displayArrowBtn;

export const {
  handleSidebarSetUp,
  handleSidebarTitlesClick,
  handleCourseClick,
  handleInstructorClick,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
