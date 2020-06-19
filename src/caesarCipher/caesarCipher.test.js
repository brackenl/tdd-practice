const caesarCipher = require("./caesarCipher");

test("throws error if not called with a string and a shift key", () => {
  expect(() => {
    caesarCipher();
  }).toThrow(
    "You must supply a string and a shift key (number) to this function"
  );
});

test("returns an encrypted version of the plaintext string shifted by the correct number of characters", () => {
  const result1 = caesarCipher("defend the east wall of the castle", 1);
  const result2 = caesarCipher("attack at dawn", 5);
  const result3 = caesarCipher("All your Base are Belong to Us!", 18);
  expect(result1).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
  expect(result2).toBe("fyyfhp fy ifbs");
  expect(result3).toBe("Sdd qgmj Tskw sjw Twdgfy lg Mk!");
});
