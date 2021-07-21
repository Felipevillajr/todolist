import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

export default function App() {
  const [item, setItem] = useState();
  const [todolist, setTodolist] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/todolist").then((res) => {
      setTodolist(res.data);
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
      .post("http://localhost:3000/todolist", {
        item: item.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
    window.location.reload();
  };

  return (
    <section id="slideshow">
      <img id="bg" src="/IMGS/skaterdude.jpg" alt="skater background" />
      <div className="todo__body">
        <h1> &#128512; Felipe's To Do List &#129324;</h1>
        <ul>
          {todolist &&
            todolist.map((x, i) => {
              return (
                <>
                  <li key={i}>
                    {x.item}
                    <input key={i} type="checkbox"></input>
                  </li>
                </>
              );
            })}
        </ul>
        <form className="input__form" onSubmit={submitButton}>
          <textarea
            className="add__item"
            onSubmit={submitButton}
            type="textarea"
            name="item"
            placeholder="add todo item"
            id="todo__add"
            required
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
