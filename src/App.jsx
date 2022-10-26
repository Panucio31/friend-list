import "./App.css";
import { useState } from "react";

const initialForm = { firstName: "", lastName: "", age: "", city: "" };

const App = () => {
  const [friends, setFriends] = useState([]);

  const [formState, setFormState] = useState(initialForm);

  const onChange = (e) => {
    const fieldId = e.target.id;
    const fieldValue = e.target.value;

    setFormState({ ...formState, [fieldId]: fieldValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      firstName: formState.firstName,
      lastName: formState.lastName,
      age: formState.age,
      city: formState.city,
    };
    setFriends([...friends, newFriend]);
    setFormState(initialForm)
  };

  const handleDelete = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  const handleEdit = (id) => {
      console.log('veikia', id)
  }

  return (
    <div>
      <h1>Friend List App</h1>
      <h2>Add new Friend</h2>
      <div className="formContainer" >
        <form>
          <input
            type="text"
            placeholder="Name"
            id="firstName"
            value={formState.firstName}
            onChange={onChange}
            required
          />

          <input
            type="text"
            id="lastName"
            placeholder="Surname"
            value={formState.lastName}
            onChange={onChange}
          />

          <input
            type="number"
            id="age"
            placeholder="Age"
            value={formState.age}
            onChange={onChange}
          />

          <input
            type="text"
            id="city"
            placeholder="City"
            value={formState.city}
            onChange={onChange}
          />
        </form>
        <button type="submit" className="btn" onClick={onSubmit}>
          Add Friend
        </button>
      </div>

      {friends.length > 0 ? (
        friends.map((friend) => (
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
            <button className="btn2" onClick={() => handleEdit(friend.id)}>Edit</button>
          </div>
        ))
      ) : (
        <h1>You have no friends!!</h1>
      )}
    </div>
  );
};

export default App;
