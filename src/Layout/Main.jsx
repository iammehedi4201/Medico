import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  //Example: Show the header and footer only on specific paths
  const showHeaderFooter = !(
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup")
  );

  return (
    <div>
      {showHeaderFooter && <Navbar />}
      <Outlet />
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
