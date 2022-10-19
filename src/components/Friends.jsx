import React, { Component } from "react";
import Card from "./Card";

const friends = [
  { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

class Friends extends Component {
  render() {
    return friends.map((friend) => 
    <Card firstName={friend.firstName}
    lastName={friend.lastName} 
    age={friend.age} 
    city={friend.city}/>);
  }
}

export default Friends;
