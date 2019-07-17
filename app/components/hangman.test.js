const Hangman = require("./hangman");

describe("Hangman", () => {
  it("renders correctly", () => {
    expect(new Hangman({ shift: 3 }).render()).toMatchSnapshot();
  });
});
