import React from "react";
import reactDOM from "react-dom";
import axios from "axios";

/*

    <button
          onClick={e => {
            // e.preventDefault();
            this.props.handleSave();
          }}
          className="formSubmit"
        </button>


                {/* <textarea
          id="text-area"
          // onChange={e => this.handleChange(e)}
          placeholder="What's up, doc?"
        /> */

export default function Form(props) {
  function postToDatabase() {
    const bubble = {
      body: document.getElementById("bubble-body")
    };
    axios
      .post("/api/post", bubble)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function generatePlaceholder() {
    return "Whoever proofread Hitler's speeches was a literal grammar nazi";
  }

  return (
    <form
      className="form"
      onChange={e => {
        props.handleChange(e);
      }}
    >
      <input id="input-text" type="text" placeholder={generatePlaceholder()} />
      <input
        type="submit"
        onClick={e => {
          e.preventDefault();
          let text = document.getElementById("input-text").value;
          props.handleSave(text);
          text = "";
        }}
      />
      <input
        type="reset"
        onClick={() => {
          props.clearAll();
        }}
      />

      <span>
        <br />
        Thought Bubbles
      </span>
    </form>
  );
}
