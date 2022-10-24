import Card from "./Card";
import { useState } from "react";
import AddFriend from "./AddFriend";

const Friends = () => {
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

  const addNewFriend = (e) => {
    console.log(e.target.value)
    const newFriend = e.target.value;
    setFriends(newFriend)
  };

  const handleDelete = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <>
      <AddFriend addNew={addNewFriend} />
      {friends.map((friend) => (
        <Card
          key={friend.id}
          firstName={friend.firstName}
          lastName={friend.lastName}
          age={friend.age}
          erase={() => handleDelete(friend.id)}
          city={friend.city}
        />
      ))}
    </>
  );
};

export default Friends;
