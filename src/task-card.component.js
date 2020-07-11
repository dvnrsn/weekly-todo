import React, { useEffect, useState } from "react";

export default function TaskCard(props) {
  const { task } = props;

  return (
    <div
      key={props.dk}
      className="row-item row-item-with-task"
      onClick={() => props.toggleDone(task.id, props.dk)}
    >
      {task.name}
    </div>
  );
}
