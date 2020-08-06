import { useEffect } from "react";

const apiKey = "5f0b66c5ca3a672eecc23ede";
const baseUrl = "https://weeklytodo-f03a.restdb.io/rest/";

export function useGetTasks(setTasks) {
  useEffect(() => {
    fetch(`${baseUrl}/tasks`, {
      headers: {
        "x-apikey": apiKey,
      },
    })
      .then((res) => res.json())
      .then((tasks) => setTasks(tasks));
  }, [setTasks]);
}

export function useGetTaskDates(setTaskDates) {
  useEffect(() => {
    fetch(`${baseUrl}/task-dates`, {
      headers: {
        "x-apikey": apiKey,
      },
    })
      .then((res) => res.json())
      .then((taskDates) => setTaskDates(taskDates));
  }, [setTaskDates]);
}
