const state = require("../lib/state");

class Timer {
  constructor(props = {}) {
    this.timer = props.timer || 0;
    let timerId;

    state.eventBus.once("mount", () => {
      timerId = setTimeout(() => {
        if (this.timer === 30) {
          state.set("lost", true);
        } else {
          state.set("timer", this.timer + 1);
        }
        state.eventBus.emit("rerender");
      }, 1000);
    });
    state.eventBus.once("unmount", () => {
      clearTimeout(timerId);
    });
  }

  getColor() {
    if (this.timer < 15) {
      return "green";
    }
    if (this.timer < 25) {
      return "yellow";
    }
    return "red";
  }

  render() {
    return `
      You have <span class="timer" style="border: 1px solid ${this.getColor()};">${30 -
      this.timer}</span> seconds to guess!
    `;
  }
}

module.exports = Timer;
