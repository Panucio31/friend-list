import "./App.css";
import { useState } from "react";
import Input from "./components/InfoInput";
import Cards from "./components/AllCards";

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

  return (
    <>
    <Input handleSubmit={onSubmit} onChange={onChange} form={formState} />
    {friends.length > 0 ? 
      <Cards handleDelete={handleDelete} friendArr={friends} /> : <h3>No friends to Show</h3>}
    </>
  );
};

export default App;
