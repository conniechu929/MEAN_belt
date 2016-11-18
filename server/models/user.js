console.log('****Inside the Users model******');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var UsersSchema = new mongoose.Schema({
  username: {
     type:String,
     required: [true, "Username is required"],
     trim: true,
     unique: true,
   },
  password: {
     type:String,
     required: [true, "Password is required"],
     trim: true,
   },
}, {timestamps: true});

var Users = mongoose.model('Users', UsersSchema);
