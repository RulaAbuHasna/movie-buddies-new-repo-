import React from 'react';
import axios from "axios";
//import ListItem from './ListItem.jsx';

 class User extends React.Component{
   constructor(props){
     super(props);
     this.state={
       name:"",
       movie:"",
       email:"",
       fb:""
     }
   }

  handleChange(e){
   this.setState({
      [e.target.name]:e.target.value
    })

  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/users',{name:this.state.name, movie:this.state.movie,email:this.state.email,fb:this.state.fb}).then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err);
    })
    alert('you have been sucessfully signed up!');
    this.reset();
  }

  reset(){
      this.setState({
          name : "",
          movie:"",
          email:"",
          fb:""
      });
  }

  render(){
    return(
 <div>
  <form onSubmit={this.handleSubmit.bind(this)}>
     <h5>
        <label >Your name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/> <br></br>
        <label>Your fav movie ^^: </label>
        <input type="text" id="movie" name="movie" value={this.state.movie} onChange={this.handleChange.bind(this)}/> <br></br>
        <label>Your Email: </label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/><br></br>
        <label>Your Facebook account: </label>
        <input type="text" id="fb" name="fb" value={this.state.fb} onChange={this.handleChange.bind(this)}/><br></br>
        <button className="btn btn-warning mt-4">Sign Up</button>
      </h5>
    </form>
  </div>
    )
  }
}

export default User;