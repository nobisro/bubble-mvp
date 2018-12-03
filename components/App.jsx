// import react from "react";
// import reactDOM from "react-dom";
// import posed from "react-pose";
// impor../../components/Box from "./Box";

// // const App = () => <Box className="box" />;
// const App = () => <h1>HEY</h1>;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from "react";
import posed from "react-pose";
import { render } from "react-dom";
// import Box from "./Box.jsx";
// import TextBox from "./TextBox.jsx";
// import DraggableText from "./TextBox2.jsx";
import Form from "./Form.jsx";
import style from "../style.css";
import Bubble from "./Bubble.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bubble: undefined,
      fizz: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  save(bubble) {
    this.setState({
      newBubble: bubble
    });
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      bubble: e.target.value
    });
  }

  handleSave() {
    let updatedFizz = this.state.fizz;
    updatedFizz.push(this.state.bubble);
    this.setState({ fizz: updatedFizz });
  }
  render() {
    let bubbles = this.state.fizz.map((bubble, id) => {
      return <Bubble text={bubble} id={id} />;
    });

    return (
      <React.Fragment>
        <Form handleChange={this.handleChange} handleSave={this.handleSave} />
        <div>{bubbles}</div>
      </React.Fragment>
    );
  }
}

export default App;
