const guess = require("./guess");

describe("guess", () => {
  it("returns a new word", () => {
    const refWord = ["a", "b", "c", "d"];
    const currWord = ["_", "_", "_", "_"];

    expect(guess("a", refWord, currWord)).toStrictEqual(["a", "_", "_", "_"]);
  });

  it("returns the word with all specified letters replaced", () => {
    const refWord = ["a", "b", "a", "d"];
    const currWord = ["_", "_", "_", "_"];

    expect(guess("a", refWord, currWord)).toStrictEqual(["a", "_", "a", "_"]);
  });

  it("returns the same word in case of no letters match", () => {
    const refWord = ["a", "b", "c", "d"];
    const currWord = ["_", "_", "_", "_"];

    expect(guess("e", refWord, currWord)).toStrictEqual(["_", "_", "_", "_"]);
  });
});
