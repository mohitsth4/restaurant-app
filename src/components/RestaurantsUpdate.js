import React, { Component } from "react";

class RestaurantsUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/resturant/" + this.props.match.params.id).then(
      (response) => {
        response.json().then((result) => {
          this.setState({
            name: result.name,
            email: result.email,
            address: result.address,
            rating: result.rating,
            id:result.id
          });
        });
      }
    );
  }

  update() {
    fetch("http://localhost:3000/resturant/" + this.state.id, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        // alert("Restaurant Updated Successfully");
      })
    })
  }
  
  render() {
    return (
      <div>
        <h1>Restaurants Update</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurant Name"
            value={this.state.name}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            value={this.state.email}
            placeholder="Restaurant Email"
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            value={this.state.rating}
            placeholder="Restaurant Rating"
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            value={this.state.address}
            placeholder="Restaurant Address"
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.update(this.props.history.push('../list'));
            }}
          >
            Update Restaurant
          </button>
        </div>
      </div>
    );
  }
}

export default RestaurantsUpdate;
