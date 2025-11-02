import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";
import { useStore } from "../../store/store";

const Sidebar = () => {

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("phonenumber");
      localStorage.removeItem("macAddress");
  
      window.location.href = '/login'
    }

  const { sidebarOpened, closeSidebar, setActiveState, activeState } = useStore();

  return (
    <div className={ sidebarOpened ? "flex h-full" : "hidden md:block"}>
      <div className="z-2 fixed bg-[#002244] w-[200px] min-h-[100%] text-white pt-6 px-4 shadow-md">
        <div className="w-full flex justify-center items-center">
          <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Fire<span className="brand-text-two text-red-600 ">Eyes</span>
          </span>
          <FaTimes onClick={closeSidebar} className="md:hidden relative left-8 text-lg" />
        </div>
        <ul className="pt-10">
          <li onClick={() => setActiveState('Home')} className={activeState === "Home" ? "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800 bg-blue-800" : "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800"}>
            <IoHomeOutline className="mr-2" />
            Home
          </li>
          <li onClick={() => setActiveState('Help Desk')} className={activeState === "Help Desk" ? "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800 bg-blue-800" : "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800"}>
            <LiaHandsHelpingSolid className="mr-2" />
            Help Desk
          </li>
           <li onClick={() => setActiveState('Settings')} className={activeState === "Settings" ? "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800 bg-blue-800" : "flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800"}>
            <GoGear className="mr-2" />
            Setting
          </li>
          <li onClick={() => logout()} className="flex items-center cursor-pointer justify-center text-lg mb-8 py-2 rounded-md hover:bg-blue-800">
            <IoIosLogOut className="mr-2" />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
