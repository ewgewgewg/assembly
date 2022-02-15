const random = (l) => {
  if (!l || typeof l !== "number") {
    throw new Error("random function was not given a length!");
  }
  return Math.floor(Math.random() * l);
};
export default random;
