import Card from "./Card";


const Cards = (props) => {
  console.log(props.friendArr)
  return (
    <>
    {props.friendArr.map((friend) => (
      <Card
        key={friend.id}
        firstName={friend.firstName}
        lastName={friend.lastName}
        age={friend.age}
        erase={() => props.handleDelete(friend.id)}
        city={friend.city}
      />
    ))}
    </>
  )
}

export default Cards;
