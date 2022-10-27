const Input = (props) => {
console.log(props)
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
            value={props.firstName}
            onChange={props.onChange}
          />

          <input
            type="text"
            id="lastName"
            placeholder="Surname"
            value={props.lastName}
            onChange={props.onChange}
          />

          <input
            type="number"
            id="age"
            placeholder="Age"
            value={props.age}
            onChange={props.onChange}
          />

          <input
            type="text"
            id="city"
            placeholder="City"
            value={props.city}
            onChange={props.onChange}
          />
        </form>
        <button type="submit" className="btn" onClick={props.handleSubmit}>
          Add Friend
        </button>
      </div>
    </div>
  )
}

export default Input
