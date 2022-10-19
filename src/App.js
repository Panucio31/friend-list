import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import "./App.css";

function App() {
  return (
    <>
      <h1>Friend List App</h1>
      <h2>Add new Friend</h2>
      <AddFriend />
      <Friends />
    </>
  );
}

export default App;
