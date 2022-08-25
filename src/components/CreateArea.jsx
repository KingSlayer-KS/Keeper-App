import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({ title: "", content: "" });
  
  function fromSubmited(event) {
    setNewNote({ title: "", content: "" });
    props.setTextArea(true);
    event.preventDefault();
  }

  function noteChanged(event) {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form className="create-note" >
        <input
          onChange={noteChanged}
          value={newNote.title}
          name="title"
          placeholder="Title"
          onClick={(prevValue) => props.setTextArea(false)}
        />

        <textarea
          style={{ display: props.textArea ? "none" : null }}
          onChange={noteChanged}
          value={newNote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom
         in={!props.textArea}>
          <Fab  onClick={() => {
            props.onClick(newNote);
            fromSubmited()
          }}  >
            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
