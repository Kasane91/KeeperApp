import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

let App = () => {
  const [noteArray, setNoteArray] = useState([]);

  const updateNoteArray = (note) => {
    setNoteArray((prevItems) => {
      return [...prevItems, note];
    });
  };

  const handleDelete = (id) => {
    console.log("I got deleted" + id);
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
