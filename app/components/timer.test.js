const Timer = require("./timer");

describe("Timer", () => {
  it("renders correctly", () => {
    expect(new Timer().render()).toMatchSnapshot();
  });
});
