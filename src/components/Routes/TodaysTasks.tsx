import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Os produtos de hoje", "Os produtos de hoje");

  return (
    <LayoutRoutes title="Os produtos de hoje" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
