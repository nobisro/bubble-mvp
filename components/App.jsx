import React, { useState, useEffect } from "react";
import posed from "react-pose";
import style from "../style.css";
import Bubble from "./Bubble.jsx";
import Fizz from "./Fizz.jsx";
import Header from "./Header.jsx";
import axios from "axios";
import Input from "./Input.jsx";

export default function App() {
  const [bubble, setBubble] = useState("");
  const [fizz, setFizz] = useState([]);

  useEffect(
    () => {
      axios
        .get("/api/bubbles")
        .then(response => {
          console.log(response);
          let temp = [];
          if (response.data) {
            response.data.forEach(bubble => {
              temp.push({ body: bubble.body, id: bubble._id });
            });
          }
          console.log("temp: ", temp);
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
    axios.post("/api/bubbles", { body: bubble }).then(bubble => {
      let updatedFizz = fizz;
      updatedFizz.push(bubble.body);
      setFizz(updatedFizz);
    });
  }

  function clearAll() {
    axios
      .delete("/api/bubbles")
      .then(() => {
        console.log("bubbles deleted");
      })
      .catch(err => {
        console.error(err);
      });
    setFizz([]);
  }

  function handleBubbleClick(id) {
    let updatedFizz = fizz.filter(bubble => {
      return bubble.id !== id;
    });
    axios.put(`/api/bubbles/${id}`, { id: id }).then(success => {
      console.log("success: ", success);
      setFizz(updatedFizz);
    });
  }

  let bubbles = fizz.map((bubble, id) => {
    if (bubble && bubble.body) {
      return (
        <Bubble
          text={bubble.body}
          id={bubble.id}
          handleBubbleClick={handleBubbleClick}
        />
      );
    }
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

/*
      <Header
        clearAll={clearAll}
        handleChange={handleChange}
        handleSave={handleSave}
      />

*/
