/**
 * Module dependencies.
 */

var render = require('./render');

/**
 * Render index html page.
 */

exports.index = function *() {
  return this.body = yield render('index');
};

// ToDo: build out rest of routes
