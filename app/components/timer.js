const state = require("../lib/state");

class Timer {
  constructor(props = {}) {
    this.timer = props.timer || 0;

    state.eventBus.once("mount", () => {
      this.timerId = setInterval(() => {
        if (this.timer === 30) {
          state.lost = true;
          state.eventBus.emit("rerender");
        } else {
          document.querySelector(".timer").innerText = ++this.timer;
        }
      }, 1000);
    });
    state.eventBus.once("unmount", () => {
      state.timer = this.timer;
      clearInterval(this.timerId);
    });
  }

  render() {
    return `<span class="timer">${this.timer}</span>`;
  }
}

module.exports = Timer;
