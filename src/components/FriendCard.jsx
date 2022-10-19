import React, { Component } from "react";

class FriendCard extends Component {
  friends = [
    { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
    { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
    { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
  ];

  render() {
    return (
    this.friends.map((friend)=>
      <div className="container">
        <div className="fNameLName">
          {friend.firstName} {friend.lastName}
        </div>
        <div className="restInfo">
        Age: {friend.age}, From: {friend.city}.
        </div>
        <button className="btn2">Delete</button>
      </div>
    )
    )
  }
}

export default FriendCard;
