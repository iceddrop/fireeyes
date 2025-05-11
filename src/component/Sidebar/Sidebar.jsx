import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import { useStore } from "../../store/store";

const Sidebar = () => {


  const { sidebarOpened, closeSidebar } = useStore();

  return (
    <div className={ sidebarOpened ? "flex h-full" : "hidden md:block"}>
      <div className="fixed z-2 bg-[#002244] w-[200px] min-h-[100%] text-white pt-6 px-4 shadow-md">
        <div className="w-full flex justify-center items-center">
          <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Fire<span className="brand-text-two text-red-600 ">Eyes</span>
          </span>
          <FaTimes onClick={closeSidebar} className="md:hidden relative left-8 text-lg" />
        </div>
        <ul className="pt-10">
          <li className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <IoHomeOutline className="mr-2" />
            Home
          </li> 
          <li className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <GrAnalytics className="mr-2" />
            Analytics
          </li>
          <li className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <GoPerson className="mr-2" />
            Profile
          </li>
          <li className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <LiaHandsHelpingSolid className="mr-2" />
            Help Desk
          </li>
          <li className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <IoIosLogOut className="mr-2" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
