import FriendCard from './components/FriendCard';
import AddFriend from './components/AddFriend';
import './App.css';

function App() {
  return (
    <>
    <h1>Friend List App</h1>
    <h2>Add new Friend</h2>
      <AddFriend />
      <FriendCard />
    </>
  );
}

export default App;
