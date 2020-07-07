import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import User from './components/user.jsx';
import ListFriends from './components/ListFriends.jsx'

class App extends React.Component {
  render () {
    return (
   <div style={{textAlign:'center'}}>
     <h1>Welcome movie lovers!</h1>
    <h3>This is a website made for you to get to know your new movie lover friend^^</h3>
    <h1>________________________________</h1>
    <h4>Please sign up your informations to process your results</h4>
    <User/>
    <hr />
    <ListFriends/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));