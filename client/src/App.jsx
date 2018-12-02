// import react from "react";
// import reactDOM from "react-dom";
// import posed from "react-pose";
// import Box from "./Box";

// // const App = () => <Box className="box" />;
// const App = () => <h1>HEY</h1>;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from "react";
import { render } from "react-dom";
class App extends React.Component {
  render() {
    return <div>'Hello world!'</div>;
  }
}
render(<App />, document.getElementById("root"));
