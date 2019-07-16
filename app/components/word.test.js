const Word = require("./word");

describe("Word", () => {
  it("renders correctly", () => {
    const currWord = ["h", "_", "_", "l", "o"];
    expect(new Word({ currWord }).render()).toMatchSnapshot();
  });
});
