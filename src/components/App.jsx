import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

const App = () => {
  const [noteArray, setNoteArray] = useState([]);

  const updateNoteArray = (note) => {
    setNoteArray((prevItems) => {
      return [...prevItems, note];
    });
  };

  const handleDelete = (id) => {
    setNoteArray((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={updateNoteArray} />
      {noteArray.map((entry, index) => (
        <Note
          key={index}
          id={index}
          title={entry.title}
          content={entry.content}
          onDelete={handleDelete}
        ></Note>
      ))}
      <Footer />
    </div>
  );
};

export default App;
