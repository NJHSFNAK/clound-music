export const formatCount = (count: number) => {
  if (count < 10000) {
    return count;
  } else {
    return `${Math.floor(count / 10000)}万`;
  }
};
