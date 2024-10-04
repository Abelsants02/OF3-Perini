import React, { useState, useEffect } from "react";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const ImportantTasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks: Task[] = tasks.filter((task: Task) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  useDescriptionTitle("Tarefas marcadas da mecearia", "produtos da mecearia");

  return (
    <LayoutRoutes title="produtos da mecearia" tasks={importantTasks}></LayoutRoutes>
  );
};

export default ImportantTasks;
