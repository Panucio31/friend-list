import React, { Component } from "react";

class AddFriend extends Component {
  render() {
    return (
      <div className="formContainer">
        <form action="send">
          <input type="text" name="name" placeholder="Name" />

          <input type="text" name="surname" placeholder="Surname" />

          <input type="number" name="age" placeholder="Age" />

          <input type="text" name="city" placeholder="City" />
        </form>
        <button className="btn">Add Friend</button>
      </div>
    );
  }
}

export default AddFriend;
