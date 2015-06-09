var restful = require('node-restful');

module.exports = function(app, route) {

  // Controller setup for REST 
  var rest = restful.model(
    'movie',
    app.models.movie
  ).methods(['get', 'put', 'post', 'delete']);

  rest.register(app, route);

  return function(req, res, next) {
    next();
  };
};