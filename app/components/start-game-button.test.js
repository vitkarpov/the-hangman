const StartGameButton = require("./start-game-button");

describe("StartGameButton", () => {
  it("renders correctly", () => {
    expect(new StartGameButton({ title: 'Go' }).render()).toMatchSnapshot();
  });
});
