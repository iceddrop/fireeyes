import { Outlet } from "react-router-dom";
import AppNav from "../component/AppNav/AppNav";
import Sidebar from "../component/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-red-500 h-0">
      <AppNav className="" />
      <div className=" w-full bg-blue-500 h-0">
        <Sidebar className=" " />
        <main className="p-4 md:pl-56 md:pr-10 bg-green-500 h-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
