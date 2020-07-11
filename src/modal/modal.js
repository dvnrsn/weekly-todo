import React from "react";
import "./modal-styles.css";
import { days as daysOfWeek } from "../helper.js";

export function Modal(props) {
  const [days, setDays] = React.useState([]);
  const [name, setName] = React.useState("");

  const handleCheckbox = e => {
    const { name } = e.target;
    setDays(days =>
      days.includes(name) ? days.filter(d => d !== name) : [...days, name]
    );
  };

  const submit = e => e.preventDefault() || props.onClose({ name, days });

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => props.onClose()}>
          &times;
        </span>
        <h2>Create a new task</h2>
        <form onSubmit={submit}>
          <div className="flex">
            <div>
              <label className="rowLabel" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="dayRow">
              <div className="rowLabel">Days</div>
              <div>
                {daysOfWeek.map(d => (
                  <>
                    <input
                      id={d}
                      name={d}
                      key={d}
                      type="checkbox"
                      checked={days.includes(d)}
                      onChange={handleCheckbox}
                    />
                    <label htmlFor={d}>{d}</label>
                    {d === "tue" && <br />}
                  </>
                ))}
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
