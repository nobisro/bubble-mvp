import React from "react";
import { render } from "react-dom";
import posed from "react-pose";
import style from "../style.css";
import Bubble from "./Bubble.jsx";

// class Fizz extends React.component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let fizz = this.props.bubbles.map((bubble, id) => {
//       <Bubble text={bubble} id={id} />;
//     });
//     return <React.Fragment>{fizz}</React.Fragment>;
//   }
// }

class Fizz extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fizz = this.props.bubbles.map((bubble, id) => {
      <li>
        <Bubble text={bubble} id={id} />;
      </li>;
    });
    return <ul>{fizz}</ul>;
  }
}

export default Fizz;
