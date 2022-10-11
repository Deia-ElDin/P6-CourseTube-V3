import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { handleMiddleHeaderSetUp } from '../features/header/middleHeader/middleHeaderSlice';
import { handleSidebarSetUp } from '../features/sidebar/sidebarSlice';
import {
  GridBtnState,
  handleRightHeaderSetUp,
} from '../features/header/rightHeader/rightHeaderSlice';
import { handleWebBodySetUp } from '../features/webBody/webBodySlice';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const gridBtn = useAppSelector(GridBtnState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    // ================ READ ME ================ //
    // 1) toggleBtn => (initially) = false.
    // 2) toggleBtn => (onClick) = true.
    // 3) ArrowBtns => to notify the user to minimize the
    //                 section

    // if(!toggleBtn) =>
    // 1- sidebarMainClass
    // 2- webMainClass
    // else if(toggleBtn) =>
    // 1- sidebarSecondaryClass
    // 2- webSecondaryClass

    // width > 1001
    // if(!toggleBtn) => ['sidebar-max', 'web-min']
    // else if(toggleBtn) => ['sidebar-min', 'web-max']
    // Grid 2++ (depends on the innerWidth)

    // width > 585
    // if(!toggleBtn) => ['sidebar-min', 'web-max']
    // else if(toggleBtn) => ['sidebar-off', 'web-full']
    // [sidebar-max, web-min] => Canceled
    // Grid <= 3

    // width <= 585
    // if(!toggleBtn) => ['sidebar-off', 'web-full']
    // else if(toggleBtn) => ['sidebar-min', 'web-max']
    // [sidebar-max, web-min] => Canceled
    // Grid <= 2

    let minGridNum;
    let maxGridNum;
    let sideBarArrowBtn = false;
    let minMiddleHeader = false;
    let minRightHeader = false;

    // Phone
    if (width <= 450) {
      minMiddleHeader = true;
      minRightHeader = true;
      minGridNum = 0;
      maxGridNum = 0;
    } else if (width <= 500) {
      minMiddleHeader = true;
      minRightHeader = true;
      sideBarArrowBtn = true;
      minGridNum = 1;
      maxGridNum = 2;
    } else if (width <= 585) {
      minMiddleHeader = true;
      minRightHeader = true;
      sideBarArrowBtn = true;
      minGridNum = 1;
      maxGridNum = 2;
    }
    // iPad
    else if (width <= 810) {
      minRightHeader = true;
      minGridNum = 1;
      maxGridNum = 2;
    } else if (width <= 880) {
      minGridNum = 1;
      maxGridNum = 3;
    } else if (width <= 1000) {
      minGridNum = 2;
      maxGridNum = 3;
    }
    // Desktop / Pc
    else if (width <= 1300) {
      minGridNum = 2;
      maxGridNum = 3;
    } else if (width <= 1600) {
      minGridNum = 3;
      maxGridNum = 4;
    } else {
      minGridNum = 3;
      maxGridNum = 5;
    }

    function setClass(width) {
      if (width <= 585) {
        return ['sidebar-off', 'web-full', 'sidebar-min', 'web-max'];
      } else if (width <= 1000) {
        return ['sidebar-min', 'web-max', 'sidebar-off', 'web-full'];
      } else {
        return ['sidebar-max', 'web-min', 'sidebar-min', 'web-max'];
      }
    }

    const classArray = setClass(width);
    const sidebarMainClass = classArray[0];
    const webMainClass = classArray[1];
    const sidebarSecondaryClass = classArray[2];
    const webSecondaryClass = classArray[3];

    dispatch(
      handleMiddleHeaderSetUp({
        displayMiddleHeader: minMiddleHeader ? false : true,
        displayMiniSearchButton: minMiddleHeader ? true : false,
        displaySearchArrowBtn: minMiddleHeader ? true : false,
      })
    );

    dispatch(
      handleRightHeaderSetUp({
        displayRightHeader: minRightHeader ? false : true,
        displayMiniOptionsButton: minRightHeader ? true : false,
        displayOptionsArrowBtn: minRightHeader ? true : false,
        gridBtn: !gridBtn ? false : minGridNum >= 1 ? true : false,
        sliderMin: minGridNum,
        sliderMax: maxGridNum,
        sliderValue: maxGridNum,
      })
    );

    dispatch(
      handleSidebarSetUp({
        mainClass: sidebarMainClass,
        secondaryClass: sidebarSecondaryClass,
        displayArrowBtn: sideBarArrowBtn,
      })
    );

    dispatch(
      handleWebBodySetUp({
        mainClass: webMainClass,
        secondaryClass: webSecondaryClass,
      })
    );

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, dispatch]);

  return width;
};

export default useWindowSize;
