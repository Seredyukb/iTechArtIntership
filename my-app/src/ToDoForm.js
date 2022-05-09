import { useState } from "react";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Add a new task..."
      ></input>
      <button>Save</button>
    </form>
  );
}
export default ToDoForm;
