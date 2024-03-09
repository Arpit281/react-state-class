import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // console.log("Task Added");
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value); //taget means the element which tagetted after this change
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    console.log(copy);
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllAsDone = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }));
    });
  };

  return (
    <div>
      <h3>Todo List!</h3>
      <input
        type="text"
        placeholder="Add Task..."
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp; &nbsp;
            <span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => markAsDone(todo.id)}>Mark as done!</button>
            </span>
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>
      <button onClick={markAllAsDone}>Mark All as Done!</button>
    </div>
  );
}
