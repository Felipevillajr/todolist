import React, { useEffect, useState } from "react";
import "./App.scss";

let index = 0;

function changeBanner() {
  [].forEach.call(document.images, function (v, i) {
    document.images[i].hidden = i !== index;
  });
  index = (index + 1) % document.images.length;
}
window.onload = function () {
  setInterval(changeBanner, 1000);
};

export default function App() {
  const [bg, setbg] = useState();

  useEffect(() => {});

  return (
    <section id="slideshow">
      <div className="todo__body">
        <h1> &#128512; Felipe's To Do List &#129324;</h1>
        <ol></ol>
      </div>
    </section>
  );
}
