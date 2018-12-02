import React from "react";
import reactDOM from "react-dom";
import posed from "react-pose";
import style from "../style.css";
// import { DragSource } from 'react-dnd';

const TextBox = React.forwardRef((props, ref) => (
  <textarea
    ref={ref}
    {...props}
    className={props.className}
    placeholder="What's up doc?"
  />
));

const PosedTextBox = posed(TextBox)({
  draggable: true,
  pressable: true,
  drag: { scale: 1.2 },
  dragEnd: { scale: 1.0 }
});

class SuperPosedTextBox extends React.Component {
  constructor(props) {
    super(props);
  }
}

export default () => <PosedTextBox className="textBox" />;

// export default TextBox;
