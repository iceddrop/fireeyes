import { Dropdown } from "flowbite-react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { PiBellSimpleBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useStore } from "../../store/store";
const AppNav = () => {
  const [dropdownTriggered, setDropdownTriggered] = useState(false);

  const { sidebarOpened, openSidebar } = useStore();
 
  return (
    <div className="fixed w-full z-1 flex items-center bg-[#002244] text-white p-4 shadow-md ">
      <GiHamburgerMenu onClick={openSidebar} className="text-lg" />
      <div className="flex w-full justify-end items-center pr-4">
        <div className="relative">
          <PiBellSimpleBold className="mr-6 text-xl" />
          <div className="flex justify-center items-center text-xs absolute size-5 rounded-full top-2 left-2 bg-red-700">12</div>
        </div>
        <Dropdown
          label=""
          dismissOnClick={false}
          onClick={() => setDropdownTriggered(!dropdownTriggered)}
          className="cursor-pointer"
          renderTrigger={() => (
            <span className="flex items-center cursor-pointer">
              <GoPerson className="mr-2 text-lg" /> Tomiwa{" "}
              {dropdownTriggered ? (
                <FaChevronDown className="ml-2" />
              ) : (
                <FaChevronRight className="ml-2" />
              )}
            </span>
          )}
        >
          <Dropdown.Item className="cursor-pointer">Dashboard</Dropdown.Item>
          <Dropdown.Item className="cursor-pointer">Settings</Dropdown.Item>
          <Dropdown.Item className="cursor-pointer">Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default AppNav;
