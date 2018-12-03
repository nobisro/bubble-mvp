import React from "react";
import reactDOM from "react-dom";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  postToDatabase() {
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

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <form
        className="form"
        onClick={e => {
          e.preventDefault();
          this.props.handleSave();
        }}
        onChange={e => {
          this.props.handleChange(e);
        }}
      >
        <textarea
          id="text-area"
          // onChange={e => this.handleChange(e)}
          placeholder="What's up, doc?"
        />
        <button className="formSubmit">save</button>
      </form>
    );
  }
}

export default Form;
