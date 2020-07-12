import { useEffect } from "react";

export default function useGetTasks(setTasks) {
  useEffect(() => {
    fetch("https://weeklytodo-f03a.restdb.io/rest/tasks", {
      headers: {
        "x-apikey": "5f0b66c5ca3a672eecc23ede",
      },
    })
      .then((res) => res.json())
      .then((tasks) => {
        tasks.forEach((task) => {
          task.days = JSON.parse(task.days);
        });
        setTasks(tasks);
      });
  }, [setTasks]);
}
