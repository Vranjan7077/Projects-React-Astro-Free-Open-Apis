import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
