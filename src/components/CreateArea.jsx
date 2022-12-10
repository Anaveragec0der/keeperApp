import React, { useState } from "react";

function CreateArea(props) {
  //creating the state to monitor the changes whenever something is inputted in the title section
  //or the text area of the note here we are creating an object that stores the title and content 
  const[note ,setNote]=useState({
    title:"",
    content:""
  });
  //note is an object that stores title and content 

  //destructuring the note object 
  const {title,content}=note;

  //handle function gets triggered whenever we type in the title section or the content section of note 
function handleNote(event){
  //event.target returns an html node object that has fields like name placeholder type value etc
  //we are destructuring that object to store name and the value 
  //name is to identify the input where the input was made ie either in the input box or the text area 
  const{name,value}=event.target;
  setNote(prevVal=>{
    //this is a very important concept here we are using spread operator to first return all the previous
    //value of note then by using [name]:value we are only updating the value where input was made so 
    //lets assume if the input was made to title section then the previous value of title which was empty 
    //string and now it gets updated with the newly entered value in that field
    //now again we enter the value in the content section and hence it also gets updated from empty string to
    //newly entered value 
    //hence one by one we we update the value of the newly created note, this process eleminate the need of if
    //else for more refrence watch the video on spread operator in the course
    return{
      ...prevVal,
      [name]:value
    };

  });
 
}
//onSubmit gets triggered when add button is pressed 
function onSubmit(event){
  //here we are triggering the addNotes function from App.jsx using props.onAdd as the addNotes function
  //was passed from App.jsx by <CreateArea/> tag so when we press the add button it triggers onSubmit
  //which in turn triggers onAdd whic triggers addNotes
  //onSubmit---->onAdd------>addNotes 
  //also an important thing is that we are passing an argument note which will be used by addNotes so that it
  //can use this note object to store it in the array
  props.onAdd(note);

  //setNote is just clearing the title and content section so that once the note is added to the array the 
  //title and content gets cleared rather than it staying on screen and manually deleted by the user 
  setNote({
    title:"",
    content:""
  });
  //as the whole button,input and text area is enclosed in the form the page gets refreshed as it is the default
  //property of html form and we don't want it to happen hence through event.preventDefault(); prevents this 
  //default action to trigger 
  event.preventDefault();
}
  return (
    <div>
      <form>
        <input name="title" onChange={handleNote} placeholder="Title" value={title} />
        <textarea name="content" onChange={handleNote} placeholder="Take a note..." rows="3" value={content} />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
