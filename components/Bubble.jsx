import React from "react";
import reactDOM from "react-dom";
import posed from "react-pose";
import style from "../style.css";

const Bubble = React.forwardRef((props, ref) => {
  function findClass() {
    let len = props.text.text ? props.text.text.length : 5;
    if (len < 5) {
      return "xs";
    } else if (len < 10) {
      return "sm";
    } else if (len < 25) {
      return "m";
    } else if (len < 100) {
      return "lg";
    } else {
      return "xl";
    }
  }
  return (
    <div ref={ref} {...props} className={`bubble ${findClass()}`}>
      {props.text.text}
    </div>
  );
});

const PosedBubble = posed(Bubble)({
  draggable: true,
  pressable: true,
  hoverable: true,
  hover: {
    scale: 1.2,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  }
});

const Wrapper = (text, id) => {
  return <PosedBubble text={text} id={id} className="bubble" />;
};

export default Wrapper;

// export default (text, id) => (
//   <PosedBubble text={text} id={id} className="bubble" />
// );

// const config1 = {
//     draggable: true,
//     pressable: true,
//     drag: { scale: 1.2 },
//     dragEnd: { scale: 1.0 }
//   }
