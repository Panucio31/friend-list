import React, { Component } from "react";

class FriendCard extends Component {

  render() {
    return (
      <div className="container">
        <div className="fNameLName">
          {this.props.firstName} {this.props.lastName}
        </div>
        <div className="restInfo">
        Age: {this.props.age}, From: {this.props.city}.
        </div>
        <button className="btn2">Delete</button>
      </div>
    )
  }
}

export default FriendCard;
