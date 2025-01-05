import React, { useState } from "react";

function App() {
    const [newTask, setTask] = useState("");

    function handleChange(event) {
        let task = event.target.value;
        setTask(task);
    }

    const [tasks, setTasks] = useState([]);


    function addTask(task) {
        setTasks([task, ...tasks])        
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" name="task" value={newTask}/>
                <button>
                    <span onClick={() => {addTask(newTask)} }>Add</span>
                </button>
            </div>
            <div>
                <ul>  
                    {tasks.map((task) => {
                        return <li> {task} </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;