const isPangram = (str: string) => {
  return new Set(str.split("")).size === 7;
};

export default isPangram;
