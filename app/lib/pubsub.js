/**
 * Mini PubSub gives components a communication channel.
 */
class PubSub {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  once(event, callback) {
    const ctx = this;
    const cb = function() {
      callback.apply(null, arguments);
      ctx.off(event, cb);
    };

    this.on(event, cb);
  }

  off(event, callback) {
    this._forEachListener(event, function(listener, index) {
      if (listener === callback) {
        this.events[event][index] = undefined;
      }
    });
  }

  emit(event) {
    var args = Array.prototype.slice.call(arguments, 1);

    this._forEachListener(event, function(listener) {
      if (typeof listener === "function") {
        listener.apply(undefined, args);
      }
    });
  }

  _forEachListener(event, callback) {
    if (this.events[event]) {
      for (var i = 0, len = this.events[event].length; i < len; i++) {
        callback.call(this, this.events[event][i], i);
      }
    }
  }
}

module.exports = PubSub;
