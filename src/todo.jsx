
import { useState } from "react";

const init = [
  {
    id: 1,
    title: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    done: true,
  },
  {
    id: 3,
    title: "Complete homework",
    done: false,
  },
  {
    id: 4,
    title: "Read a book",
    done: true,
  },
  {
    id: 5,
    title: "Exercise",
    done: false,
  },
];

export default function Todo() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => {
      
      return t.id != id;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (event) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="form_input"> 
      <input className="input" type="text" placeholder="Add a new task" onChange={(event) => setText(event.target.value)} />
      <button className="button" disabled={text == ""} onClick={addNewTodo}>
        +
      </button>
      </div>
      
      <h1 className="task">Tasks to do - 4</h1>
      <ul className="ul">
        {todos.map((t) => {
          return (
            <li key={t.id}>
              <span>{t.title}</span>
              <button onClick={() => deleteTodo(t.id)}>x</button>
            </li>
          );
        })}
      </ul>

    </div>
  );
}
