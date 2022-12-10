import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {
  //creating an array to store the notes object so that we can monitor their states and add or delete them
  const[notes,setNote]=useState([]);
  //addNotes is triggered by the child component from CreateArea.jsx by <CreateArea/> tag
function addNotes(note){
  //setaNote adds the newly added note object and all the previously created note in the notes array
  //with the help of the spread operator
  setNote(prevValue=>{
  return[...prevValue,note];
  });
}
//this function is triggered as soon as the delete button is clicked in the child component Note.jsx
//the delete button is present in each and every note hence this function is passed from custom <Note/> tag 
//with other properties like title content and id 
//the id passed here is from the Note tag wich is the index of that object in the array which is determined 
//by .map function 
function deleteNote(id){
  //here we are using filter function on prevValue array which consist of note onjects and 
  //we are compairing each object with the passed id in the argument to only return array which contains 
  //note object whose index does not match with the id passed in the function which also is the index of a particular note
  //to summarise we are using index of a note in the array as its id to identify it uniquely and if a delete
  //button is pressed in a particular note then id of that note is passed ie index of that note in the notes array
  //then it is compared with index of every note in notes array and all the note are returned as array of objects note
  //except for that note whose index matches with the id passed in the function
  //keep in mind that filter function takes a function as an argument which has 2 arguments one is the item
  //on which it is iterating and second is the index of that item which we are using here 
  setNote(prevValue=>{
   return prevValue.filter((oneNote,index)=>{
       return index!==id;
    })
  })
}
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
  {notes.map((singleNote,index)=>{
    return <Note
    //the key is important because react wants every element in the array to have a unique key for 
    //.map function to work properly 
      key={index} 
      //the id is used to identify the note uniquely in the array and is passed to child component
      id={index}
      //each and every note has as title and content and hence singleNote object is used to acces them and 
      //then is passed to the child component Notes.jsx so that it can be displayed 
      title={singleNote.title }
      content={singleNote.content}
      //deleteNote function is passed from the delete attribute to Notes.jsx
      delete={deleteNote}
    />
  })}
      <Footer />
    </div>
  );
}

export default App;
