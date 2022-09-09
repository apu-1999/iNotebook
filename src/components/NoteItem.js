import React, { useContext } from "react";
import noteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote} = context;
  const { note } = props;
  const handleDelete = (e) => {
    e.preventDefault();
    deleteNote(note._id);
  }
   const handleEdit = (e) => {
    //  e.preventDefault();
    //  editNote(note._id,note.title, note.description, note.tag);
   }
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={handleDelete}></i>
            <i className="far  fa-edit mx-2" onClick={handleEdit}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
