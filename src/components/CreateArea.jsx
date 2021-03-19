import React, { useState } from "react";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleClick = () => {
    setExpanded(() => {
      return true;
    });
    console.log(isExpanded);
  };

  return (
    <div>
      <form className="create-note" onClick={handleClick}>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              props.onAdd(note);
              setNote({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
