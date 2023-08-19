// import { useLocation } from "react-router-dom";

const Main = () => {
  // const location = useLocation();
  //Example: Show the header and footer only on specific paths
  //   const showHeaderFooter = !(
  //     location.pathname.includes("/login") ||
  //     location.pathname.includes("/signup")
  //   );

  return (
    <div>
      {/* {showHeaderFooter && <NavBar />}
      <Outlet />
      {showHeaderFooter && <CuponCard />}
      {showHeaderFooter && <Footer />} */}
    </div>
  );
};

export default Main;
