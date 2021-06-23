import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import CurrDate from "./CurrDate"

const getLocalItems = () => {
      let list = localStorage.getItem('list');

      if (list) {
            return JSON.parse(localStorage.getItem('list'))
      } else {
            return [];
      }
}


function App() {
  const [notes, setNotes] = useState(getLocalItems());

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  useEffect(() => {
      localStorage.setItem('list' , JSON.stringify(notes))
 }, [notes]);


  return (
    <div>
      <Header />
      <CurrDate />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
