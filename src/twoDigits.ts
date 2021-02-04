const twoDigits = (v: number) => {
  if (v < 10) {
    return `0${v}`;
  }
  return v;
};

export default twoDigits;
