import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [item, setItem] = useState();
  const [todolist, setTodolist] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/todolist").then((res) => {
      setTodolist(res.data);
      console.log(todolist[0]);
    });
  }, []);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  function handleClick(e) {
    e.preventDefault();
    setItem(e.target.value);
  }

  const submitButton = (e) => {
    e.preventDefault();
    axios
      .post("/todolist", {
        item: item.value,
      })
      .catch((err) => alert(err));
  };

  return (
    <section id="slideshow">
      <img id="bg" src="/IMGS/skaterdude.jpg" alt="skater background" />
      <div className="todo__body">
        <h1> &#128512; Felipe's To Do List &#129324;</h1>
        <ul>
          <li>{todolist[0].item}</li>
          <li>{todolist[1].item}</li>
        </ul>
        <form>
          <textarea
            className="add__item"
            onSubmit={submitButton}
            type="textarea"
            name="item"
            placeholder="add todo item"
            value={setItem}
            id="todo__add"
            onChange={handleChange}
          />
          <button id="add__button" onClick={() => handleClick}>
            Add Item
          </button>
        </form>
      </div>
    </section>
  );
}
