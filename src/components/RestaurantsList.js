import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';

class RestaurantsList extends Component {

constructor (){
  super();
  this.state={
    list:null
  }
}

componentDidMount(){
  this.getData()
}

getData(){
  fetch('http://localhost:3000/resturant').then((response)=>{
    response.json().then((result)=>{
      this.setState({list:result})
    })
  } )
}

delete(id) {
  fetch('http://localhost:3000/resturant/' + id, {
    method: "DELETE",
  }).then((result) => {
    result.json().then((resp) => {
      alert("Restaurant Successfully Deleted");
      this.getData()
    })
  })
}

  render() {
    this.getData()
    return (
      <div>
        <h1>Restaurants List</h1>
        {
          this.state.list?
          <div>
            {
              this.state.list.map((item, i) =>
                <div>
                  {item.id}<br/>
                  {item.name}<br/>
                  {item.address}<br/>
                  {item.email}<br/>
                  {item.rating} <br/>
                  <Link to={"/update/" + item.id}>Edit</Link>
                  <span onClick={() => this.delete(item.id)}>Delete</span>
                </div>
              )
            }
          </div>
          :
          <p>Please Wait...</p>
        }
      </div>
    );
  }
}

export default RestaurantsList;
