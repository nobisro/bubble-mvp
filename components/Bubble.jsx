import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import posed from "react-pose";
import style from "../style.css";
import { spring } from "popmotion";

const Bubble = React.forwardRef((props, ref) => {
  const [text, setText] = useState(props.text.text);
  //   console.log("props.text.children.props: ", props.text.children.props);
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

  function handleChange(event) {
    console.log("event");
    setText(event.target.value);
  }
  return (
    <React.Fragment>
      <div
        ref={ref}
        {...props}
        className={`bubble ${findClass()}`}
        type="text"
        // value={text}
        value={
          <input
            onClick={() => {
              console.log("input field clicked");
            }}
          >
            {text}
          </input>
        }
        onChange={handleChange}
      >
        {props.text.text}
        <div
          className="bubble-button"
          onClick={() => {
            props.text.handleBubbleClick(props.text.id);
            // props.text.handleBubbleClick(props.text.id)
            // props.text.handleBubbleClick(props.text.id);
          }}
        >
          x
        </div>
      </div>
    </React.Fragment>
  );
});

const PosedBubble = posed(Bubble)({
  draggable: true,
  pressable: true,
  hoverable: true,
  hover: {
    scale: 1.2,
    boxShadow: "0px 8px 12px rgba(0,0,0,0.3)"
  },
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  }
});

const Wrapper = (text, id, handleBubbleClick) => {
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

/*
  draggable: true,
  pressable: true,
  hoverable: true,
  hover: {
    scale: 1.2,
    boxShadow: "0px 10px 15px rgba(0,0,0,0.3)"
  },
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
*/
