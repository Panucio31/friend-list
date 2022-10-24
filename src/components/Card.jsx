

const Card = (props) => {

  return (
    <div className="container" key={props.id}>
      <div className="fNameLName">
        {props.firstName} {props.lastName}
      </div>
      <div className="restInfo">
        Age: {props.age}, From: {props.city}.
      </div>
      <button className="btn2" onClick={props.erase}>
        Delete
      </button>
    </div>
  );
}



export default Card;
