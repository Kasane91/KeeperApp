import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const createNoteEntry = (entry) => {
  return (
    <Note key={entry.id} title={entry.title} content={entry.content}></Note>
  );
};

let App = () => {
  return (
    <div>
      <Header />
      {notes.map(createNoteEntry)}
      <Footer />
    </div>
  );
};

export default App;
