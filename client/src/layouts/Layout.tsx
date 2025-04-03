import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className=" mx-auto  min-h-[calc(100vh-115px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
