import React, { useState, useEffect } from "react";
import posed from "react-pose";
import style from "../style.css";
import Bubble from "./Bubble.jsx";
import Fizz from "./Fizz.jsx";
import Header from "./Header.jsx";
import axios from "axios";

export default function App() {
  const [bubble, setBubble] = useState("");
  const [fizz, setFizz] = useState([]);

  useEffect(
    () => {
      axios
        .get("/api/bubbles")
        .then(response => {
          let temp = [];
          response.data.forEach(bubble => {
            temp.push(bubble.body);
          });
          setFizz(temp);
        })
        .catch(error => {
          console.error(error);
        });
    },
    [fizz.length]
  );

  function handleChange(e) {
    setBubble(e.target.value);
  }

  function handleSave(bubble) {
    console.log("fizz len: ", fizz.length);
    axios
      .post("/api/bubbles", { body: bubble, color: "blue" })
      .then(response => {
        let updatedFizz = fizz;
        updatedFizz.push(bubble);
        setFizz(updatedFizz);
        console.log("line 42");
      });
  }

  function clearAll() {
    axios.delete("/api/bubbles").then(response => {
      console.log(response);
    });
    setFizz([]);
  }

  let bubbles = fizz.map((bubble, id) => {
    return <Bubble text={bubble} id={id} />;
  });

  return (
    <React.Fragment>
      <Header
        clearAll={clearAll}
        handleChange={handleChange}
        handleSave={handleSave}
      />

      {bubbles}
    </React.Fragment>
  );
}
