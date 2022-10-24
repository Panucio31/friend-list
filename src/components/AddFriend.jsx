const AddFriend = (props) => {

 

    return (
      
      <div className="formContainer">
        <form action="send" id="form">
          <input type="text" name="name" placeholder="Name" />
        
          <input type="text" name="surname" placeholder="Surname" />

          <input type="number" name="age" placeholder="Age" />

          <input type="text" name="city" placeholder="City" />
        </form>
        <button className="btn" form="form" onClick={props.addNew}>Add Friend</button>
      </div>
    );
  }

export default AddFriend;
