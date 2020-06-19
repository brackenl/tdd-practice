const caesarCipher = (string, shift) => {
  let result = "";

  const checkCase = (char) => {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      return "lower";
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return "upper";
    }
    return false;
  };

  if (typeof string !== "string" || typeof shift !== "number") {
    throw Error(
      "You must supply a string and a shift key (number) to this function"
    );
  }
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    const charCase = checkCase(char);
    const charCode = string.charCodeAt(i);

    if (!charCase) {
      result += char;
    } else if (charCase === "lower") {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
  }
  return result;
};

module.exports = caesarCipher;
