import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Fetch All Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwODc2NjVjZmY5ZjgxMWNiYWFlZDQ2In0sImlhdCI6MTY2MTUxMTA1N30.z5ffjoQuOQGuiU0HwpQJiFqGLZ-od10g6fM_rbe6XIM",
      }
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwODc2NjVjZmY5ZjgxMWNiYWFlZDQ2In0sImlhdCI6MTY2MTUxMTA1N30.z5ffjoQuOQGuiU0HwpQJiFqGLZ-od10g6fM_rbe6XIM",
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = {
      _id: "631971e0f3794ad00d864977",
      user: "63087665cff9f811cbaaed46",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwODc2NjVjZmY5ZjgxMWNiYWFlZDQ2In0sImlhdCI6MTY2MTUxMTA1N30.z5ffjoQuOQGuiU0HwpQJiFqGLZ-od10g6fM_rbe6XIM",
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };



  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwODc2NjVjZmY5ZjgxMWNiYWFlZDQ2In0sImlhdCI6MTY2MTUxMTA1N30.z5ffjoQuOQGuiU0HwpQJiFqGLZ-od10g6fM_rbe6XIM",
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit at client side
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
