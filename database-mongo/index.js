var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
//mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  name: String,
  movie: {
    type: String,
    lowercase: true
  },
  email: String,
  fb:String
});

let userModel = mongoose.model('user', userSchema);

// let model1=new  userModel({name:"rula", movie:"fight club", email:"rula@wtever"});
// model1.save((err)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log("saved!")
//   }
// })

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;