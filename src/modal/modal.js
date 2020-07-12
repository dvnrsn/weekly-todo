import React from "react";
import "./modal-styles.css";
import { days as daysOfWeek } from "../helper.js";
import useSaveTask from './use-save-task';

export function Modal(props) {
  const [days, setDays] = React.useState([]);
  const [name, setName] = React.useState("");
  const [submit, setSubmit] = React.useState()

  const handleCheckbox = e => {
    const { name } = e.target;
    setDays(days =>
      days.includes(name) ? days.filter(d => d !== name) : [...days, name]
    );
  };

  const taskSaved = newTask => setSubmit() || props.onClose(newTask)

  useSaveTask(taskSaved, {name, days}, submit)

  const onSubmit = e => e.preventDefault() || setSubmit(true);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => props.onClose()}>
          &times;
        </span>
        <h2>Create a new task</h2>
        <form onSubmit={onSubmit}>
          <div className="flex">
            <div>
              <label className="rowLabel" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="dayRow">
              <div className="rowLabel">Days</div>
              <div>
                <div className="days">
                  {daysOfWeek.slice(0, 3).map((d) => (
                    <div key={d}>
                      <input
                        id={d}
                        name={d}
                        type="checkbox"
                        checked={days.includes(d)}
                        onChange={handleCheckbox}
                      />
                      <label htmlFor={d}>{d}</label>
                    </div>
                  ))}
                </div>
                <div className="days">
                  {daysOfWeek.slice(3, 7).map((d) => (
                    <div key={d}>
                      <input
                        id={d}
                        name={d}
                        type="checkbox"
                        checked={days.includes(d)}
                        onChange={handleCheckbox}
                      />
                      <label htmlFor={d}>{d}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button>submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
