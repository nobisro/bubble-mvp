import React from "react";
import reactDOM from "react-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  postData() {
    const sticky = {
      body: $('#post-body').val(),
    }
  }

  render() {
    return (
      <div className="bubble">
      <form className="form" onSubmit={this.postData}>
        <textarea placeholder="What's up, doc?" />
        <button className="formSubmit" type="submit">
          save
        </button>
      </form>
      <div>
    );
  }
}

export default Form;
