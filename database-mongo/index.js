var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies',{useNewUrlParser: true}).then(()=>{
  console.log("connected!");
}).catch((err)=>{
  console.log("oops"+err);
});

const userSchema = mongoose.Schema({
  name: String,
  movie: String,
  email: String,
  fb:String
});

let userModel = mongoose.model('user', userSchema);

module.exports.userModel=userModel;

