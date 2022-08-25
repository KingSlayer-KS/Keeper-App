import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arrNote, setarrNote] = useState([]);
  const [textArea, setTextArea] = React.useState(true);

  function addToArr(newNote) {
    setarrNote((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function delNote(id) {
    setarrNote((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }

  return (
    <div>
      <Header />
      <CreateArea
        onClick={addToArr}
        textArea={textArea}
        setTextArea={setTextArea}
      />

      {arrNote.map((arritem, index) => (
        <Note
          key={index}
          id={index}
          title={arritem.title}
          content={arritem.content}
          delete={delNote}
          setTextArea={setTextArea}
          
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
