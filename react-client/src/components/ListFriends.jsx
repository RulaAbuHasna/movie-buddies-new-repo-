import React from 'react';
import axios from "axios";

class ListFriends extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movie:"",
      friends:[]
    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(e.target.name +"  "+e.target.value)
  }
  handleSubmit(e){
    e.preventDefault();
    axios.get(`http://localhost:3000/users/${this.state.movie}`).then((res)=>{
      console.log(res.data);
      this.setState({
        friends:res.data
      })
    }).catch((err)=>{
      console.log(err);
    })
    this.reset();
  }

   reset(){
     this.setState({
       movie:""
     });
   }
  render(){
    console.log(this.friends)
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>lets see who's your next friend! please put ur fav movie here</h1>
          <input name="movie" type="text" value={this.state.movie} onChange={this.handleChange.bind(this)}/>
          <button btn className=' btn btn-warning'>List</button>
          {this.state.friends.map((friend, index)=>(
            <li>
             name: {friend.name},fb account : {friend.fb}, email: {friend.email}
            </li>
          ))}
        </form>
      </div>
    )
  }
}


export default ListFriends;