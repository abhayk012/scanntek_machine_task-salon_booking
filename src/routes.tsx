import { Routes, Route } from "react-router";
import Home from "./(root)/home/page.tsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
