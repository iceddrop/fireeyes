import { Outlet } from "react-router-dom";
import AppNav from "../component/AppNav/AppNav";
import Sidebar from "../component/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
    <AppNav className=""/>

      <div className=" w-full">
           <Sidebar className=" "/>


        <main className="p-4 md:pl-56 w-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
