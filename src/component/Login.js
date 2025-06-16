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
import { jwtDecode } from "jwt-decode";
const Login = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phonenumber: "",
  //   email: "",
  //   password: "",
  //   notificationPreference: "SMS",
  //   otp: "",
  //   emailVerificationCode: "",
  // });

  const [phonenumber , setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  
  const [otpLoadingState, setOtpLoadingState] = useState({
    sms: false,
    email: false,
  });

  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();
  // const ToastExample = () => {
  //   const showToast = () => {
  //     toast.success("This is a toast alert!", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   };
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const sendOtp = async () => {
  //   try {
  //     setLoading(true);
  //     const [sms, email] = await Promise.all([
  //       axios.get(
  //         `https://fireeyes-detector-wokt.onrender.com/user/sendOtp/${formData.phonenumber}`
  //       ),
  //       axios.post(
  //         `https://fireeyes-detector-wokt.onrender.com/user/sendOtpToEmail/${encodeURIComponent(
  //           formData.email
  //         )}`
  //       ),
  //     ]);
  //     setLoading(false);

  //     return {
  //       first: sms.data,
  //       second: email.data,
  //     };
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Failed to send OTP. Please try again.");
  //   }
  // };

  // const sendEmailOtp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       await axios.post(
  //         `https://fireeyes-detector-wokt.onrender.com/user/sendOtpToEmail/${encodeURIComponent(
  //           formData.email
  //         )}`
  //       )
  //     );
  //   } catch (error) {
  //     setLoading(false);
  //     setError("Failed to send OTP. Please try again.");
  //   }
  // };

  // const handleSendOtp = async () => {
  //   try {
  //     setOtpLoadingState({ ...otpLoadingState, sms: true });
  //     const response = await axios.post(
  //       `https://fireeyes-detector-wokt.onrender.com/user/sendOtp/${formData.phonenumber}`
  //     );
  //     console.log(response);
  //     toast.success("SMS OTP sent successfully!");
  //   } catch (error) {
  //     console.error("Error sending SMS OTP:", error);
  //     toast.error("Failed to send SMS OTP.");
  //   } finally {
  //     setOtpLoadingState({ ...otpLoadingState, sms: false });
  //   }
  // };

  // const handleSendEmailOtp = async () => {
  //   try {
  //     setOtpLoadingState({ ...otpLoadingState, email: true });
  //     const response = await axios.post(
  //       `https://fireeyes-detector-wokt.onrender.com/user/sendOtpToEmail/${encodeURIComponent(
  //         formData.email
  //       )}`
  //     );
  //     console.log(response);
  //     toast.success("Email OTP sent successfully!");
  //   } catch (error) {
  //     console.error("Error sending Email OTP:", error);
  //     toast.error("Failed to send Email OTP.");
  //   } finally {
  //     setOtpLoadingState({ ...otpLoadingState, email: false });
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       "https://fireeyes-detector-wokt.onrender.com/user/verifyOtpAndCreateUser",
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     if (response.status === 200 && response.data === ' User registered successfully.') {
  //       toast.success("Registration Successful!");
  //     } else {
  //       toast.error('Registration failed: ' + response.data);
  //     }
  //   } catch (error) {
  //     console.error('Registration error:', error.response?.data || error.message);
  //     toast.error('Registration failed: ' + (error.response?.data?.message || 'An error occurred'));
  //   }
  // };

    const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
       setLoading(true);
      const response = await fetch("https://fireeyes-detector-wokt.onrender.com/user/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({ phoneNumber: phonenumber, password }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { message: text };
      }

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      const token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("phonenumber", phonenumber); // ✅ Save phone number

      const decoded = jwtDecode(token);
      console.log("Decoded JWT:", decoded);

      const user = {
        phoneNumber: decoded.phoneNumber,
        name: decoded.name,
        role: decoded.role || "ROLE_USER",
        isVerified: decoded.isVerified || true,
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      if (user.role === "ROLE_ADMIN") {
        navigate("/home");
    } else {
        navigate("/user/linkdetector");
      }

    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message || "Something went wrong during login.");
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
          <form onSubmit={handleLogin} className="">
            <div className="flex flex-col w-full">
              <label>Phone number</label>
              <input
                type="text"
                name="phonenumber"
                     value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
            </div>
           
            <div className=" flex flex-col pt-4 w-full">
              <label>Password</label>
              <input
                type="text"
                name="password"
                  value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          
            <div className="flex justify-center pt-4 pb-6">
              <button type="submit" className="py-2 px-4 text-white rounded-md bg-red-600">
                {loading ? (
                  <CircleLoader
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    color={color}
                  />
                ) : (
                  "Login"
                )}
              </button>
            
            </div>
 <p className="text-center pb-2">Don't have an account? <Link className="text-blue-500" to="/Register">Sign up</Link></p>
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

export default Login;
