class Hangman {
  constructor({ shift }) {
    this.shift = shift;
  }

  render() {
    return `
      <div class="hangman-sprite"
        style="background-position: 0 ${-256 * this.shift}px;"
      ></div>
    `;
  }
}

module.exports = Hangman;
