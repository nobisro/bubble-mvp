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
    console.log(e);
  }

  render() {
    return (
      <form
        className="form"
        onChange={e => {
          this.props.handleChange(e);
        }}
      >
        <input type="text" />
        <input
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.props.handleSave();
          }}
        />
      </form>
    );
  }
}

export default Form;
