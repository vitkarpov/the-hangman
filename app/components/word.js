const state = require("../lib/state");

class Word {
  constructor({ currWord }) {
    this.currWord = currWord;
  }

  render() {
    return `
      <div class="word">
        ${this.currWord
          .map(letter => {
            return `<div class="word-item">${letter}</div>`;
          })
          .join("")}
      </div>
    `;
  }
}

module.exports = Word;
