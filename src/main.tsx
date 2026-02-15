import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import RQuery from "./components/RQuery.tsx";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="font-sans antialiased">
    <BrowserRouter>
      <RQuery>
        <Toaster />
        <AppRoutes />
      </RQuery>
    </BrowserRouter>
  </div>,
);
