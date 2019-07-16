const PubSub = require("./pubsub");

/**
 * Global app state
 */
const state = {
  started: false,
  eventBus: new PubSub()
};

module.exports = state;
