import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "63105d70350518ef5c842bc90",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn React",
          "description": "Learn React this week for the urgent deliverable project work",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d863372",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d863373",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d863374",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d863375",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d86336",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        },
        {
          "_id": "631971e0f3794ad00d863377",
          "user": "63087665cff9f811cbaaed46",
          "title": "Learn Java",
          "description": "Learn Java for backend deliverable",
          "tag": "Urgent",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);

      //Add a note
      console.log("Adding a new note")
      const addNote = (title, description, tag) => {
        const note = {
          "_id": "631971e0f3794ad00d864977",
          "user": "63087665cff9f811cbaaed46",
          "title": title,
          "description": description,
          "tag": tag,
          "__v": 0
        };
        setNotes(notes.concat(note));
      }
      //Delete a note
      const deleteNote = (id) => {

      }
      //Edit a note
      const editNote = (id) => {

      }
    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;