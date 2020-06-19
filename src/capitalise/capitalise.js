const capitalise = (string) => {
  if (!string) {
    throw Error("You need to provide a string as an argument");
  }
  const newString = string.toLowerCase();
  return newString.charAt(0).toUpperCase() + newString.slice(1);
};

module.exports = capitalise;
