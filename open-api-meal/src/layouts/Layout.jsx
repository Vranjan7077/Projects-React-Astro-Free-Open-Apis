import { Outlet } from "react-router-dom";
import TmdbHeader from "../components/TmdbHeader";

function Layout() {
  return (
    <div className="layout">
      <TmdbHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
