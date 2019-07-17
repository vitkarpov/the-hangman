class Hangman {
  constructor({ misses }) {
    this.misses = misses;
  }

  render() {
    return `
      <div class="hangman-sprite"
        style="background-position: 0 ${-256 * this.misses.length}px;"
      ></div>
    `;
  }
}

module.exports = Hangman;
