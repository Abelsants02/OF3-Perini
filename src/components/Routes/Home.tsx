import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Veja os seus produtos", "Todos os produtos");
  return <LayoutRoutes title="Todos os produtos" tasks={tasks}></LayoutRoutes>;
};

export default Home;
