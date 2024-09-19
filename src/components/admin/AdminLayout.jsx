import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
