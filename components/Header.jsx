import React from "react";
import Form from "./Form.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="topnav">
        <a href="#signup">Sign up></a>
        <a href="#login">Login></a>
        <Form
          handleChange={this.props.handleChange}
          handleSave={this.props.handleSave}
        />
      </div>
    );
  }
}

export default Header;
