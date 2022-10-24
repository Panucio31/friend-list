import "./App.css";
import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState([
    { id: 1, 
      firstName: "John", 
      lastName: "Smith", 
      age: 32, 
      city: "Kaunas" 
    },
    {
      id: 2,
      firstName: "Maria",
      lastName: "Hudghes",
      age: 28,
      city: "Siauliai",
    },
    {
      id: 3,
      firstName: "Thomas",
      lastName: "Muiller",
      age: 33,
      city: "Vilnius",
    },
  ]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const addNewFriend = (e) => {
    e.preventDefault();
    setFriends([...friends, {id: Date.now(), firstName, lastName, age, city}])
    
  };

  const handleDelete = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <div>
      <h1>Friend List App</h1>
      <h2>Add new Friend</h2>
      <div className="formContainer">
        <form action="send" id="form">
          <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          id="name" 
          value={firstName}
          onChange={(e)=> setFirstName(e.target.value)}/>

          <input 
          type="text" 
          name="surname" 
          placeholder="Surname" 
          value={lastName}
          onChange={(e)=> setLastName(e.target.value)}
          />

          <input 
          type="number" 
          name="age" 
          placeholder="Age"
          value={age}
          onChange={(e)=> setAge(e.target.value)}
           />

          <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={city}
          onChange={(e)=> setCity(e.target.value)}
          />
        </form>
        <button className="btn" form="form" onClick={addNewFriend}>
          Add Friend
        </button>
      </div>

      {friends.map((friend) => (
        <div className="container" key={friend.id}>
          <div className="fNameLName">
            {friend.firstName} {friend.lastName}
          </div>
          <div className="restInfo">
            Age: {friend.age}, From: {friend.city}.
          </div>
          <button className="btn2" onClick={() => handleDelete(friend.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
