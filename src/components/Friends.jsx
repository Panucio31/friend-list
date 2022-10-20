import React, { Component } from "react";
import Card from "./Card";

const friends = [
  { id:1, firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { id:2, firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { id:3, firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

class Friends extends Component {
  render() {
    return friends.map((friend) => 
    <Card key={friend.id} firstName={friend.firstName}
    lastName={friend.lastName} 
    age={friend.age} 
    city={friend.city}/>);
  }
}

export default Friends;
