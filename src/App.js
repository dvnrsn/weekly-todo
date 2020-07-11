import React, { useState } from "react";
import "./styles.css";
import { Modal } from "./modal/modal";

const defaultTasks = [
  {
    id: "1",
    name: "study JS",
    days: ["mon", "wed", "fri"]
  },
  {
    id: "2",
    name: "read atomic habits 15 min",
    days: ["all"]
  }
];

export default function App() {
  const [modalVisible, setModal] = useState();
  const [tasks, setTasks] = useState(defaultTasks);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayKeys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const getTaskColumns = task => {
    const all = task.days?.[0] === "all";
    return dayKeys.map(dk => {
      return task.days.includes(dk) || all ? (
        <div key={dk} className="row-item row-item-with-task">
          {task.name}
        </div>
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
        {days.map(day => (
          <div key={day} className="header-item">
            {day}
          </div>
        ))}
      </div>
      {tasks.map(task => (
        <div key={task.id} className="row">
          {getTaskColumns(task)}
        </div>
      ))}
    </div>
  );
}
