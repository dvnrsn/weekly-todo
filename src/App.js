import React, { useState } from "react";
import "./styles.css";
import { Modal } from "./modal/modal";

export default function App() {
  const [modalVisible, setModal] = useState();
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
  const tasks = [
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
  return (
    <div className="App">
      <button onClick={() => setModal(true)}>add new task</button>
      {modalVisible && <Modal onClose={() => setModal()} />}
      <div className="header row">
        {days.map(day => (
          <div className="header-item">{day}</div>
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
