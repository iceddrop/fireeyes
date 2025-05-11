import "./LandingPage.scss";
import Nav from "../../component/Nav/Nav";
import extinguisher from "../../assets/vecteezy_minimalist-blue-air-humidifier-design_54484677.png";
import { Link } from "react-router-dom";
import Features from "../../component/Features/Features";
import Footer from "../../component/Footer/Footer";

const LandingPage = () => {
  return (
    <main className="">
      <div className="z-50 relative">
        <Nav />
      </div>
      <div className="relative background w-full" id="home">
        <div className="bg-gray-700 opacity-[40%] w-full h-full absolute"></div>
        <div className="z-40 relative flex justify-around items-center mt-16 py-12 ">
          <div className="px-6 lg:px-20 xl:px-40">
            <h1 className="text-2xl md:text-3xl xl:text-4xl text-white font-bold headline-text">
              The Future of Safety: Smoke, Gas Detection, SMS Alerts, and
              Automated Sprinklers All in One Device
            </h1>
            <p className="text-justify headline-text font-medium text-white">
              Experience a new era of safety with our all-in-one detection and
              response system. Designed to protect your loved ones and property,
              this innovative device combines cutting-edge smoke and gas
              detection with instant SMS alerts to keep you informed wherever
              you are. In emergencies, the automated sprinkler system activates
              immediately, ensuring rapid response to fire hazards before they
              escalate. Easy to install, reliable, and smart, this device is
              your ultimate safeguard for a safer tomorrow.
            </p>
            <div className="flex justify-center">
              <Link
                to={"/register"}
                className="bg-red-600 text-white headline-text px-4 py-2 rounded-md mt-4"
              >
                Register Now
              </Link>
            </div>
          </div>
          <img
            src={extinguisher}
            className="hidden lg:block h-80 w-80 object-contain"
          />
        </div>
      </div>
      <Features id="features" />
      <Footer id="contact"/>
    </main>
  );
};

export default LandingPage;
