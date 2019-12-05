import React, { Component } from 'react'
import Login from './components/Login'
import './App.css'
import TaskList from './components/TaskList'

export default class App extends Component {

state = {
  userID: null,
  username: "",
  signIn: false,
}


signedinUser = (user) => {
  this.setState({
    userID: user.id,
    username: user.username,
    signIn: true,
  })
}


  render() {
    return (
      <div className="App">
        <h1>Welcome! {this.state.username}</h1>
        {this.state.signIn ? <TaskList userID={this.state.userID} /> : <Login signedinUser={this.signedinUser}/>}
      </div>
    )
  }
}
