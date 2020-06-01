import React, { Component } from 'react'

export default class RestaurantsLogin extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      password:""
    }
  }

  login()
  {
    fetch("http://localhost:3000/login/?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp)
        if(resp.length>0)
        {
          localStorage.setItem('login', JSON.stringify(resp))
          console.warn(this.props.history.push('list'))
        }
        else{
          alert("Please check Username and Password")
        }
      })
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="user" placeholder="Enter Name" 
        onChange={(event) => {this.setState({name:event.target.value})}} /><br/> <br/> 
        <input type="password" name="password" placeholder="Enter Password" 
        onChange={(event) => {this.setState({password:event.target.value})}} /><br/> <br/>
        <button onClick={() => {this.login()}}>Login</button> 
      </div>
    )
  }
}
