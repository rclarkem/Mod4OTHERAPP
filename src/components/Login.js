import React, {Component} from 'react'

export default class Login extends Component {

  loginEvent = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target.username.value
      })
    })
    .then(response => response.json())
    .then(user => {
      this.props.signedinUser(user)
    })
  }

  render() {
    console.log(this.props)
    return (<div>
      <form onSubmit={this.loginEvent}>
        <label htmlFor='username'>
          Username:
          <input type='text' name='username'/>
          <input style={{backgroundColor:'blue', color: 'white'}} type='submit' value='Enter'/>
        </label>
      </form>
    </div>);
  }
}
