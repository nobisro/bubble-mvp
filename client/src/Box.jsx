import react from "react";
import reactDOM from "react-dom";
import posed from "react-pose";

const Box = posed.div({
  draggable: true
});

export default Box;

// const Example = () => <Box className="box" />;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example />, rootElement);
