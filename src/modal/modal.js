import React from "react";
import "./modal-styles.css";

export function Modal(props) {
  return (
    <div class="modal">
      <div class="modal-content">
        <span class="close" onClick={props.onClose}>
          &times;
        </span>
        <h2>Create a new task</h2>
        <div className="flex">
          <div>
            <label className="rowLabel" htmlFor="name">
              Name
            </label>
            <input id="name" />
          </div>
          <div className="dayRow">
            <div className="rowLabel">Days</div>
            <div>
              <input id="sun" type="checkbox" />
              <label htmlFor="sun">sun</label>
              <input id="mon" type="checkbox" />
              <label htmlFor="mon">mon</label>
              <input id="tue" type="checkbox" />
              <label htmlFor="tue">tue</label>
              <br />
              <input id="wed" type="checkbox" />
              <label htmlFor="wed">wed</label>
              <input id="thu" type="checkbox" />
              <label htmlFor="thu">thu</label>
              <input id="fri" type="checkbox" />
              <label htmlFor="fri">fri</label>
              <input id="sat" type="checkbox" />
              <label htmlFor="sat">sat</label>
            </div>
          </div>
        </div>
        <div className="footer">
          <button>submit</button>
        </div>
      </div>
    </div>
  );
}
