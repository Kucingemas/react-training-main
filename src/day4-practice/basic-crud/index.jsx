import React, { useEffect, useState } from "react";

export default function TodoList() {
  const [taskValue, setTaskValue] = useState("");
  const [todos, setTodos] = useState([]);


  console.log('todos :>> ', todos);
//   const getData = async () => {
//     try {
//       await fetch("http://localhost:3004/todolist")
//         .then((res) => res.json())
//         .then((data) => setTodos(data));
//     } catch (error) {}
//   };

  //   useEffect(() => {
  //       getData()
  //   }, [])

  const addTask = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: taskValue,
      },
    ]);
    //postData()
    setTaskValue("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="add todos"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <hr />
      <div>
        <ul>
          {todos.map((item, key) => (
            <li>{item.id}. {item.task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
