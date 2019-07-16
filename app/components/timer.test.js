const Timer = require("./timer");

describe("Timer", () => {
  it("renders correctly", () => {
    expect(new Timer().render()).toMatchSnapshot();
  });

  it("renders correctly after a second pass", () => {
    const node = document.createElement("div");
    node.innerHTML = new Timer().render();

    setTimeout(() => {
      expect(node.querySelector(".timer").innerText).toBe("1");
    }, 1000);
  });
});
