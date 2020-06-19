const calculator = (operation, num1, num2) => {
  if (
    typeof operation !== "string" ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    throw Error("You must supply an operation and 2 numbers to this function");
  }
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    default:
      throw Error(
        'You must supply "add", "subtract", "multiply" or "divide" as the operation argument'
      );
  }
};

module.exports = calculator;
