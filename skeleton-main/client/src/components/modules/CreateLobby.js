import React, { useState } from "react";
import { Link } from "@reach/router";
import "./CreateLobby.css";

const CreateLobby = () => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setName(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     props.onSubmit && props.onSubmit(value);
  //     setValue("");
  //   };

  return (
    <div>
      <h3> Create a new lobby!</h3>
      <div>
        <input type="text" placeholder="Type Username" value={name} onChange={handleChangeTwo} />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          //   onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div>
        <input type="text" placeholder="Type lobby name" value={value} onChange={handleChange} />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          //   onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateLobby;