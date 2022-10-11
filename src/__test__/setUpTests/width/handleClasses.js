const handleClasses = (width) => {
  if (width <= 585) {
    return ['sidebar-off', 'web-full', 'sidebar-min', 'web-max'];
  } else if (width <= 1000) {
    return ['sidebar-min', 'web-max', 'sidebar-off', 'web-full'];
  } else {
    return ['sidebar-max', 'web-min', 'sidebar-min', 'web-max'];
  }
};

export default handleClasses;
