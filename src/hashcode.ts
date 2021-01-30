const hashCode = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const char = input.charCodeAt(i);
    hash = 31 * hash + char;
  }
  return hash;
};

export default hashCode;
