import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState("");
  const [addTodo, setAddTodo] = useState([]);
  // const [style, setStyle] = useState(false);
  // const onCheck = () => {
  //   setStyle("line-through");
  // };

  const onChange = (e) => {
    setTodos(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todos === "") {
      alert("Empty input");
    } else {
      setAddTodo((ls) => [...ls, todos]);
      setTodos("");
    }
  };

  const onClick = (todo) => {
    setAddTodo((prev) => prev.filter((a) => a !== todo));
  };
  const onEdit = () => {};
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "60px",
          margin: "20px",
        }}
      >
        Todo List
      </h1>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="Add todo..."
            value={todos}
            onChange={onChange}
            className="form__field"
          />
          <button className="form-btn">Enter</button>
        </form>
        {addTodo.map((todo) => {
          return (
            <div key={todo} className="todo-box">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  className="check-box"
                  type="checkbox"
                  // onChange={onCheck}
                />
                <h1
                  style={{
                    fontSize: "40px",
                    // textDecoration: style,
                  }}
                >
                  {todo}
                </h1>
              </div>
              <div>
                <button className="btn active" onClick={() => onClick(todo)}>
                  Remove
                </button>
                <button className="btn " onClick={onEdit}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
