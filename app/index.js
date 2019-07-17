const App = require("./components/app");
const state = require("./lib/state");
const render = require("./lib/render");

const app = new App();
const renderApp = () => {
  state.eventBus.emit("unmount");
  render(app.render(getProps()), document.getElementById("app"));
  state.eventBus.emit("mount");
};

state.eventBus.on("rerender", renderApp);
document.addEventListener("DOMContentLoaded", renderApp);

function getProps() {
  return {
    started: state.started,
    won: state.won,
    lost: state.lost,
    currWord: state.currWord
  };
}
