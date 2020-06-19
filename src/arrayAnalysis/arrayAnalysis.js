const arrayAnalysis = (arr) => {
  const resultObj = {};
  let isArrOfNums = true;
  arr.map((ele) => (typeof ele === "number" ? null : (isArrOfNums = false)));
  if (isArrOfNums === false) {
    throw Error(
      "This function must be passed an array of numbers as an argument"
    );
  }

  resultObj.average = arr.reduce((a, b) => a + b) / arr.length;
  resultObj.length = arr.length;
  resultObj.min = Math.min(...arr);
  resultObj.max = Math.max(...arr);

  return resultObj;
};

module.exports = arrayAnalysis;
