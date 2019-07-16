const App = require("./components/app");
const state = require("./lib/state");
const render = require("./lib/render");
const wordList = require("./lib/word-list");

const app = new App();
const renderApp = () => {
  state.eventBus.emit("unmount");
  render(app.render(getProps()), document.getElementById("app"));
  state.eventBus.emit("mount");
};

state.eventBus.on("rerender", renderApp);
document.addEventListener("DOMContentLoaded", renderApp);

function getProps() {
  const refWord = wordList[getRandomInt(wordList.length - 1)].split("");

  return {
    started: state.started,
    won: state.won,
    lost: state.lost,
    refWord: refWord,
    currWord: refWord.map((letter, index) => {
      if (index > 0 && index < refWord.length - 1) {
        return "_";
      }
      return letter;
    })
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
