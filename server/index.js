var express = require('express');
var bodyParser = require('body-parser');
let db = require('../database-mongo');

let userModel=db.userModel;

var app = express();
app.use(express.json());

 app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/users',(req,res)=>{
  const {name,movie,email,fb} = req.body;
  let userDoc=new userModel({name:name,movie:movie,email:email,fb:fb});
  userDoc.save((err)=>{
  if(err){
    res.status(500).send("there's an error in post"+err);
  }else{
    res.status(201).send('saved!');
  }
})
})

app.get('/users', function (req, res) {
  userModel.find({}).then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    res.send(err);
  })
 })

app.get('/users/:movie',(req,res)=>{
  const movie = req.body.movie;
  userModel.find({movie:movie}).then((result)=>{
    res.send(result);
  }).catch((err)=>{
    res.send(err);
  })
})

var port=3000;
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

