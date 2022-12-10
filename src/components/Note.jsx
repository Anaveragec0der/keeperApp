import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* as soon as the delete button is clicked on the note the it triggers the delete note function
      in App.jsx 
      also we cannot write onClick{props.delete(props.id)} because this will trigger the funciton 
      immediately without waiting for button to be clicked as functionName() is considered as straight
      up function call and it wont wait for the click on button so to make it wait for the button click
      we have to keep the function call inside the function */}
      <button onClick={()=>{
        props.delete(props.id);
      }} >DELETE</button>
    </div>
  );
}

export default Note;
