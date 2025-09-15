import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/9feae60ea81842259049ab0f27467b93-free-removebg-preview.png";
import CircleLoader from "react-spinners/CircleLoader";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Footer from "./Footer/Footer";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
    notificationPreference: "SMS",
    otp: "",
    emailVerificationCode: "",
  });

  const navigate = useNavigate();

  const [otpLoadingState, setOtpLoadingState] = useState({
    sms: false,
    email: false,
  });

  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSendOtp = async () => {
    try {
      setOtpLoadingState({ ...otpLoadingState, sms: true });
      const response = await axios.post(
        `https://fireeyes-detector-wokt.onrender.com/user/sendOtp/${formData.phonenumber}`
      );
      console.log(response);
      toast.success("SMS OTP sent successfully!");
    } catch (error) {
      console.error("Error sending SMS OTP:", error);
      toast.error("Failed to send SMS OTP.");
    } finally {
      setOtpLoadingState({ ...otpLoadingState, sms: false });
    }
  };

  const handleSendEmailOtp = async () => {
    try {
      setOtpLoadingState({ ...otpLoadingState, email: true });
      const response = await axios.post(
        `https://fireeyes-detector-wokt.onrender.com/user/sendOtpToEmail/${encodeURIComponent(
          formData.email
        )}`
      );
      console.log(response);
      toast.success("Email OTP sent successfully!");
    } catch (error) {
      console.error("Error sending Email OTP:", error);
      toast.error("Failed to send Email OTP.");
    } finally {
      setOtpLoadingState({ ...otpLoadingState, email: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://fireeyes-detector-wokt.onrender.com/user/verifyOtpAndCreateUser",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response.status === 200 &&
        response.data === " User registered successfully."
      ) {
        toast.success("Registration Successful!");
        navigate("/Login");
      } else {
        toast.error("Registration failed: " + response.data);
        navigate("/Login");
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
      toast.error(
        "Registration failed: " +
          (error.response?.data?.message || "An error occurred")
      );
    } finally {
      setLoading(false);
    }
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
      </Breadcrumb>
      <ToastContainer />
      <div className="relative register-background w-full flex flex-col justify-center items-center lg:justify-start py-4">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="register-container  w-96 flex flex-col justify-center items-center z-50 relative">
          <div className="flex justify-center">
            <img class="h-20" src={logo} alt="Fireeye Logo" />
            <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Fire<span className="brand-text-two text-red-600 ">Eyes</span>
            </span>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col w-full mt-3">
              <label>Phone Number</label>
              <div className="flex">
                <input
                  type="text"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                <div
                  onClick={() => handleSendOtp()}
                  className="cursor-pointer bg-red-600 text-white py-2 px-4  mx-2 rounded-md"
                >
                  {otpLoadingState.sms ? (
                    <CircleLoader
                      loading={otpLoadingState.sms}
                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      color={color}
                    />
                  ) : (
                    "Send OTP"
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-3">
              <label>Email</label>
              <div className="flex">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <div
                  onClick={() => handleSendEmailOtp()}
                  className="cursor-pointer bg-red-600 text-white py-2 px-4 mx-2 rounded-md"
                >
                  {otpLoadingState.email ? (
                    <CircleLoader
                      loading={otpLoadingState.email}
                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      color={color}
                    />
                  ) : (
                    "Send OTP"
                  )}
                </div>
              </div>
            </div>
            <div className=" flex flex-col pt-4 w-full">
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
            </div>
            <div className=" flex flex-col pt-4 w-full">
              <label>Notification Preference</label>
              <select
                name="notificationPreference"
                onChange={handleChange}
                value={formData.notificationPreference}
              >
                <option value="SMS">SMS</option>
                <option value="EMAIL">EMAIL</option>
              </select>
            </div>
            <div className=" flex flex-col pt-4 w-full">
              <label>SMS OTP</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter your SMS OTP"
              />
            </div>
            <div className=" flex flex-col pt-4 w-full">
              <label>Email OTP</label>
              <input
                type="text"
                name="emailVerificationCode"
                value={formData.emailVerificationCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    emailVerificationCode: e.target.value,
                  })
                }
                placeholder="Enter your Email OTP"
              />
            </div>
            <div className="flex justify-center pt-4 pb-6">
              <button className="py-2 px-4 text-white rounded-md bg-red-600">
                {loading ? (
                  <CircleLoader
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color={color}
                  />
                ) : (
                  "Register"
                )}
              </button>
            </div>
            <p className="text-center pb-2">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/Login">
                Login
              </Link>
            </p>
            {error && <p className="error text-center">{error}</p>}
          </form>
        </div>
      </div>
      <div className="pt-6">
        <Footer />
      </div>
    </>
  );
};

export default Register;
