import React, { useEffect, useState } from "react";
import "./App.scss";

let index = 0;

// function changeBanner() {
//   [].forEach.call(document.images, function (v, i) {
//     document.images[i].hidden = i !== index;
//   });
//   index = (index + 1) % document.images.length;
// }
// window.onload = function () {
//   setInterval(changeBanner, 1000);
// };

export default function App() {
  // const [bg, setbg] = useState();

  // useEffect(() => {});

  function handleClick(e) {}

  return (
    <section id="slideshow">
      <img
        id="bg"
        src="http://localhost:3000/IMGS/skaterdude.jpg"
        alt="skater background"
      />
      <div className="todo__body">
        <h1> &#128512; Felipe's To Do List &#129324;</h1>
        <ol>
          <li>shower</li>
          <li>brush teeth</li>
        </ol>

        <textarea type="textarea" id="todo__add" />
        <button id="add__button" onClick={() => handleClick}>
          Add Item
        </button>
      </div>
    </section>
  );
}
