const reverseString = (string) => {
  if (!string) {
    throw Error("You need to provide a string as an argument");
  }
  return string.split("").reverse().join("");
};

module.exports = reverseString;
