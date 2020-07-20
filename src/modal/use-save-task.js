import { useEffect } from "react";

export default function useSaveTask(cb, task, submit) {
  useEffect(() => {
    if (submit) {
      const { name, days } = task;
      const data = {
        name,
        days: JSON.stringify(days.map((day) => ({ day, done: false }))),
      };
      fetch("https://weeklytodo-f03a.restdb.io/rest/tasks", {
        method: "POST",
        headers: {
          "x-apikey": "5f0b66c5ca3a672eecc23ede",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((task) => {
          task.days = JSON.parse(task.days)
          cb(task)
        });
    }
  }, [cb, task, submit]);
}
