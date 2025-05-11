import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ValidateOtp.css";
import logo from "../assets/9feae60ea81842259049ab0f27467b93-free-removebg-preview.png";
import CircleLoader from "react-spinners/CircleLoader";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Footer from "./Footer/Footer";
import { Button , Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const ValidateOtp = () => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(60); // 30 minutes in seconds
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [openModal, setOpenModal] = useState(false);
  const phonenumber = location.state?.phonenumber;

  useEffect(() => {
    console.log("Received phonenumber:", phonenumber); // Debugging purpose
    if (!phonenumber) {
      setMessage("Phone number is missing. Please try again.");
      navigate("/"); // Redirect back if phonenumber is missing
    }

    // Timer countdown logic
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer); // Stop the timer when it hits 0
          setMessage("OTP expired. Please request a new one.");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    // Cleanup the interval when component is unmounted or timer reaches 0
    return () => clearInterval(timer);
  }, [phonenumber, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      setLoading(true);
      const payload = { otp, phonenumber };
      console.log("Sending payload:", payload); // Debugging purpose
      await axios.post(
        "https://fireseysbackend-1.onrender.com/api/v1/FireEyes/validate-otp",
        payload
      );
      setOpenModal('true')
    } catch (error) {
      console.error("Error response:", error.response?.data); // Debug backend error
      setLoading(false);
      setMessage(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example" className="py-2 pl-2">
        <Breadcrumb.Item href="/" className="text-white" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/Register" className="text-white">
          Register
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/validate-otp" className="text-white">
          Validate
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="relative register-background w-full flex justify-center items-center font-bold lg:justify-start h-screen lg:py-4">
        <div className="bg-gray-600 w-full h-full  absolute opacity-50 z-40"></div>
        <div className="validate-container lg:h-full w-80 flex flex-col justify-center items-center z-50 relative ml-4">
          <div className="flex justify-center">
            <img class="h-20" src={logo} alt="Fireeye Logo" />
            <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Fire<span className="brand-text-two text-red-600 ">Eyes</span>
            </span>
          </div>
          <h1 className="text-2xl">Validate OTP</h1>
          <p>Phone Number: {phonenumber}</p>
          <p>Time Remaining: {formatTime(timeLeft)}</p>{" "}
          {/* Display time countdown */}
          <form onSubmit={handleSubmit} className="form">
            <div className=" flex flex-col pt-4 w-60">
              <label>Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="Enter the OTP"
                disabled={timeLeft === 0} // Disable input if OTP expired
              />
            </div>
            <div className="flex justify-center pt-4 pb-6">
              <button
                disabled={timeLeft === 0}
                type="submit"
                className="py-2 px-4 text-white rounded-md bg-green-600"
              >
                {loading ? (
                  <CircleLoader
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color={color}
                  />
                ) : (
                  "Validate"
                )}
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <div className="pt-6">
      <Footer/>
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
           
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Phone number validation succesful !
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="success" onClick={() => setOpenModal(false)}>
                <Link to="/Registert">{"OK"}</Link>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ValidateOtp;
