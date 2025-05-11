import logo from "../../assets/9feae60ea81842259049ab0f27467b93-free-removebg-preview.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, Navbar } from "flowbite-react";
const Nav = () => {
  const [scrollspyVal, setScrollspyVal] = useState("home");

  return (
    <>
          <Navbar fluid rounded class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 py-4 px-4">
          <a
          href="https://fire-detecter-registeration-portal.vercel.app"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} class="h-8" alt="FireEyes Logo" />
          <span class="brand-text-one self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fire <span className="brand-text-two text-red-600 ">Eyes</span>
          </span>
        </a>
        <div className="flex md:order-2">
        <div className="flex item-center">
            <Link
              to={"/register"}
              className="bg-red-600 text-white py-2 px-4 mr-6 rounded-md"
            >
              Register
            </Link>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#home"  onClick={() => setScrollspyVal('home')} className="cursor-pointer" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#features"  onClick={() => setScrollspyVal('features')} className="cursor-pointer" >Features</Navbar.Link>
          <Navbar.Link href="#contact" onClick={() => setScrollspyVal('contact')} className="cursor-pointer" >Contact</Navbar.Link>
          <Navbar.Link href="/team" className="cursor-pointer"  >Team</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
   
    </>
  );
};

export default Nav;
