const Hangman = require("./hangman");

describe("Hangman", () => {
  it("renders correctly", () => {
    expect(new Hangman({ misses: ["a", "b", "c"] }).render()).toMatchSnapshot();
  });
});
