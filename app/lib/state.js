const PubSub = require("./pubsub");

/**
 * Global app state
 */
const state = {
  started: false,
  won: false,
  lost: false,
  eventBus: new PubSub()
};

module.exports = state;
