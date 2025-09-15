import React, { Component } from "react";
import { CircleLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

class LinkDetector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      macAddress: "",
      responseMessage: "",
      isError: false,
       loading: false,
       color: "#ffffff" 
    };
  }

  handleChange = (e) => {
    this.setState({ macAddress: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const phonenumber = localStorage.getItem("phonenumber");
    const { macAddress } = this.state;

    if (!token || !phonenumber) {
      this.setState({
        responseMessage: "Missing token or phone number. Please log in again.",
        isError: true,
      });
      return;
    }
    const url = `https://fireeyes-detector-wokt.onrender.com/gas-detectors/user/assign?phonenumber=${encodeURIComponent(
      phonenumber
    )}&macAddress=${encodeURIComponent(macAddress)}`;

    try {
      this.setState({ loading: true });
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });

      const text = await response.text();

      if (response.ok) {
        this.setState({ responseMessage: text, isError: false }, () => {
          setTimeout(() => {
            window.location.href =
              "https://fireeyes-w8d7-2ftv8f1s6-iceddrops-projects.vercel.app//home";
          }, 1500);
        });
      } else {
        this.setState({ responseMessage: text, isError: true });
          toast.error("Operation failed, try again")
      }
    } catch (error) {
      this.setState({
        responseMessage: "Network error. Please try again.",
        isError: true,
      });
      toast.error("Operation failed, try again")
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { macAddress, responseMessage, isError, loading , color } = this.state;

    return (
      <div className="container flex justify-center items-center h-screen bg-white px-4">
        <ToastContainer />
        <div
          className="card p-4 shadow rounded-md py-10"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h2 className="text-center mb-4 font-extrabold">Link Your Gas Detector</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="mb-3 flex flex-col">
              <label className="form-label">MAC Address *</label>
              <input
                type="text"
                className="form-control"
                name="macAddress"
                value={macAddress}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="w-full">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-500 text-white p-2 rounded-md"
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
                    "LINK DETECTOR"
                  )}
                </button>
              </div>
            </div>
          </form>

          {responseMessage && (
            <div
              className={`alert mt-3 ${
                isError ? "alert-danger" : "alert-success"
              }`}
              role="alert"
            >
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default LinkDetector;
