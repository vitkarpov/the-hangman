const PubSub = require("./pubsub");

/**
 * Global app state
 */
const state = {
  started: false,
  won: false,
  lost: false,
  timer: 0,
  eventBus: new PubSub()
};

module.exports = state;
