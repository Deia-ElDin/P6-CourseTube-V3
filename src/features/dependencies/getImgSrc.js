function getImgSrc(path) {
  return `${process.env.PUBLIC_URL} + ${path}`;
}

export default getImgSrc;
