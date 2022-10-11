import { combineReducers, configureStore } from '@reduxjs/toolkit';
import leftHeaderReducer from '../features/header/leftHeader/leftHeaderSlice';
import middleHeaderReducer from '../features/header/middleHeader/middleHeaderSlice';
import rightHeaderReducer from '../features/header/rightHeader/rightHeaderSlice';
import userReducer from '../features/header/user/userSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import webBodyReducer from '../features/webBody/webBodySlice';

export const store = configureStore({
  reducer: {
    leftHeader: leftHeaderReducer,
    middleHeader: middleHeaderReducer,
    rightHeader: rightHeaderReducer,
    user: userReducer,
    sidebar: sidebarReducer,
    webBody: webBodyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const rootReducer = combineReducers({
  leftHeader: leftHeaderReducer,
  middleHeader: middleHeaderReducer,
  rightHeader: rightHeaderReducer,
  user: userReducer,
  sidebar: sidebarReducer,
  webBody: webBodyReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
