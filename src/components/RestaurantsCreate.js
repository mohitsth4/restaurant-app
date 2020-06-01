import React, { Component } from "react";

class RestaurantsCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      rating:null,
      address:null
    }
  }
  create()
  {
    fetch('http://localhost:3000/resturant', {
      method:"Post",
      headers:{
'content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant Added Successfully");
      })
    })
  }
  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="Restaurant Name"
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          placeholder="Restaurant Email"
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ rating: event.target.value });
          }}
          placeholder="Restaurant Rating"
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          placeholder="Restaurant Address"
        />
        <br />
        <br/>
        <button onClick={() => {this.create()}}>Add Restaurant</button>
      </div>
    );
  }
}

export default RestaurantsCreate;
