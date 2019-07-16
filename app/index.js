const App = require("./components/app");
const state = require("./lib/state");
const render = require("./lib/render");

const app = new App();
const renderApp = () => {
  const props = {
    started: state.started
  };
  state.eventBus.emit("unmount");
  render(app.render(props), document.getElementById("app"));
  state.eventBus.emit("mount");
};

state.eventBus.on("rerender", renderApp);
document.addEventListener("DOMContentLoaded", renderApp);
