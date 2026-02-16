import { Routes, Route, useLocation } from "react-router";
import { useEffect, type JSX } from "react";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Booking from "./pages/booking/Booking";
import ServiceOptions from "./pages/booking/ServiceOptions";
import History from "./pages/booking/History";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Scroll to Top component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Title Wrapper Component
const TitleWrapper = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) => {
  useEffect(() => {
    document.title = `${title} | Scanntek Salon`;
  }, [title]);

  return children;
};

// Layout Wrapper Component
const LayoutWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Routes>
          {routesConfig.map(({ path, element, title }) => (
            <Route
              key={path}
              path={path}
              element={<TitleWrapper title={title}>{element}</TitleWrapper>}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Route config
const routesConfig = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/services", element: <Services />, title: "Services" },
  { path: "/booking", element: <Booking />, title: "Book Appointment" },
  {
    path: "/booking/service/:serviceId",
    element: <ServiceOptions />,
    title: "Select Service Option",
  },
  { path: "/history", element: <History />, title: "Booking History" },
];

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes wrapped in Layout */}
      <Route path="/*" element={<LayoutWrapper />} />
    </Routes>
  );
};

export default AppRoutes;
