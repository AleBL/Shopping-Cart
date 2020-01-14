import React  from "react"

export default (props) => {
  return (
    <div>
      <div> <b>Shipping Value: { props.data[0] }</b> </div>
      <div> <b>Discount:       { props.data[1] }</b> </div>
      <div> <b>Total:          { props.data[2] }</b> </div>
      <button className="btn btn-success" 
        onClick={ () => alert("Your Purchase was successfully sent") }>
        Purchase 
      </button>
    </div>
  );
};
