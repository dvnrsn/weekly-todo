import React, { useState } from "react";
import "./styles.css";
import { Modal } from "./modal/modal";
import {days as dayKeys, fullDays} from './helper.js';
import TaskCard from "./task-card.component";
import useGetTasks from "./use-get-tasks";

export default function App() {
  const [modalVisible, setModal] = useState();
  const [tasks, setTasks] = useState([]);

  useGetTasks(setTasks)

  const toggleDone = (taskId, day) => {
    const taskToChange = tasks.find(t => t.id === taskId)
    const dayToToggle = taskToChange.days.find(d => d.day === day)
    day.done = !day.done
    // TODO: update tasks state @taylor
  }

  const getTaskColumns = task => {
    const all = task.days?.[0] === "all";
    return dayKeys.map(dk => {
      return task.days.some(d => d.day.includes(dk)) || all ? (
        <TaskCard key={dk} dk={dk} task={task} toggleDone={toggleDone}/>
      ) : (
        <div key={dk} className="row-item" />
      );
    });
  };
  const onClose = newTask => {
    if (newTask) {
      setTasks(tasks => [...tasks, newTask]);
    }
    setModal();
  };
  return (
    <div className="App">
      <button onClick={() => setModal(true)}>add new task</button>
      {modalVisible && <Modal onClose={onClose} />}
      <div className="header row">
        {fullDays.map(day => (
          <div key={day} className="header-item">
            {day}
          </div>
        ))}
      </div>
      {tasks.map(task => (
        <div key={task._id} className="row">
          {getTaskColumns(task)}
        </div>
      ))}
    </div>
  );
}
