import { useState } from 'react';
import './TaskList.css';

function TaskList() {
  let [lastId, setLastId] = useState(0);
  let [taskList, setTaskList] = useState([]);
  let [text, setText] = useState("");

  const handleTextChange = (event) => setText(event.target.value);

  const incrementLastId = () => {
    const nextId = lastId + 1;
    setLastId(nextId);
    
    return nextId;
  };

  const addTask = (event) => {
    event.preventDefault();
    setTaskList([...taskList, { text, id: incrementLastId() }]);
    setText("");
  };

  const removeTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  return (
    <div className="content">
      {taskList.map((task) => {
        return (
          <div className="task d-flex justify-content-between shadow-sm rounded p-2 mb-2">
            {task.text}
            <i className="bi bi-trash" onClick={() => removeTask(task.id)}></i>
          </div>
        );
      })}
      <form onSubmit={addTask} className="d-flex align-items-center">
        <input type="text" value={text} onChange={handleTextChange} className="form-control" />
        <button type="submit" className="btn btn-primary ms-2">Ajouter</button>
      </form>
    </div>
  );
}

export default TaskList;
