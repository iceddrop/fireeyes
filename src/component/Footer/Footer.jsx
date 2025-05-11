import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="" id="contact">
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="brand-text-one self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fire <span className="brand-text-two text-red-600 ">Eyes</span>
          </span>
        </a>

        <ul className="flex justify-between w-72 item-center pt-4 md:pt-0">
          <li>
            <Link>Company</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link>Products</Link>
          </li>
        </ul>

        <ul className="flex justify-between w-40 item-center py-4 md:pt-0">
          <li>
            <Link>
              <RiInstagramFill className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link>
              <FaTwitter className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link>
              <FaGithub className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link>
              <FaYoutube className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center ">
        © 2025 Made with React and Tailwind by Fireyes Team.
      </p>
      <p className="text-center pb-4">
        Lane 24, Bolajoko street, osogbo, Osun state, Nigeria.
      </p>
    </footer>
  );
};


export default Footer;
