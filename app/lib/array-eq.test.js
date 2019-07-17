const arrayEq = require("./array-eq");

describe("arrayEq", () => {
  it("returns true for arrays with the same content", () => {
    const refWord = ["a", "b", "c", "d"];
    const currWord = ["a", "b", "c", "d"];

    expect(arrayEq(refWord, currWord)).toBe(true);
  });

  it("returns false for arrays with different content", () => {
    const refWord = ["a", "b", "c", "d"];
    const currWord = ["a", "_", "c", "d"];

    expect(arrayEq(refWord, currWord)).toBe(false);
  });
});
