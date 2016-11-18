console.log('routes');
// var mongoose = require('mongoose');
// var Friends = mongoose.model('Friends');
// var Users = mongoose.model('Users');
var friends = require('../controllers/friends.js');
var users = require('../controllers/users.js');

module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
  app.post('/friends/register', users.create);
  app.post('/friends/login/', users.logUser);
  app.get('/friendusers', users.index);
}
