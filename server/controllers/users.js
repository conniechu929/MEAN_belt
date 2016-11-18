console.log('****Inside the users controller in server side*****');
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

function UsersController(){
  this.index = function(req,res){
    Users.find({}, function(err, users) {
      if(err) {
        console.log("No users");
        // res.json({placeholder:friends});
      }
      else {
        res.json({users});
      }
    })
  };
  this.create = function(req,res){
    var user = new Users({username: req.body.name, password: req.body.password});

    user.save(function(err) {
      if(err) {
        console.log('something went wrong');
        res.json({err:err})
      } else {
        console.log('successfully added new user!');
        res.json(user)
        console.log(user);
      }
    })
    // res.json({placeholder:'create'});
  };
  this.logUser = function(req, res) {
    var name = req.body.name;
    console.log(name);
    Users.findOne({username:name}, function(err, user) {
      if(err) {
        console.log('Cannot find user in the data database!');
        res.json({err: err})
      }
      else {
        // if(user == null) {
        //
        // }
        // else{
        //
        // }
        res.json(user)
      }
    })
  };
}

module.exports = new UsersController();
