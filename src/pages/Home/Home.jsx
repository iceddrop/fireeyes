import NotificationsTableChunk from "./Chunks/NotificationsTableChunk/NotificationsTableChunk";
import { Progress } from "flowbite-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./Home.css";
import { useEffect, useState } from "react";
import { Select } from "flowbite-react";
import { RxReload } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiExport } from "react-icons/ci";
import axios from "axios";

const Home = () => {
  const [chartData, setChartData] = useState([]);

  const [gasData, setGasData] = useState({});

    const handleRefresh = () => {
    window.location.reload();
  };

  const getDetails = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        "https://fireeyes-gwetb3h6fchrb4hm.westeurope-01.azurewebsites.net/user/user-gas-details",
        {
          params: {
            phoneNumber: "07077504334",
            macAddress: "EC:E3:34:23:48:C8",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      setGasData(data);

      // extract values (guarded)
      const temp = data?.gasDetector?.temperature ?? null;
      const co2 = data?.gasDetector?.co2 ?? null;
      const time = new Date().toLocaleTimeString("en-NG", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });

      // append new point keeping last 30 points
      setChartData((prev) => {
        const newPoint = { time, temp, co2 };
        const next = [...prev, newPoint];
        return next.length > 30 ? next.slice(next.length - 30) : next;
      });

      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    let mounted = true;
    // initial fetch
    if (mounted) getDetails();

    const id = setInterval(() => {
      getDetails();
    }, 5000);

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);


  return (
    <div className="relative z-[-1]   pt-16 ">
      <h3 className="font-one font-bold text-lg py-3">Dashboard</h3>
      <div className="max-w-md w-full py-4">
        <div className="mb-2  flex justify-end">
          <RxReload onClick={()=> handleRefresh()} className=" mr-6 text-green-950 text-2xl font-bold cursor-pointer hover:bg-green-100 p-1 rounded-md" />
          <RiDeleteBinLine className=" mr-4 text-red-950 text-2xl font-bold cursor-pointer hover:bg-red-100 p-1 rounded-md" />
          <CiExport className="text-2xl font-bold cursor-pointer hover:bg-blue-100 p-1 rounded-md" />
        </div>
        <Select id="mac-address" required>
          <option>Select MAC-ADDRESS</option>
          <option>00:1A:2B:3C:4D:5E</option>
          <option>00:1A:2B:3C:4D:5F</option>
          <option>00:1A:2B:3C:4D:60</option>
          <option>00:1A:2B:3C:4D:61</option>
        </Select>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4">
        <div className="shadow-md col-span-1 h-64 rounded-md px-3 py-6 font-one bg-[#FAF9F6]">
          <h3 className="font-bold">User Information</h3>
          <ul className="flex flex-col justify-around h-full">
            <li>
              <span className="font-bold">Name:</span> {gasData?.user?.name}
            </li>
            <li>
              <span className="font-bold">Email:</span> {gasData?.user?.email}
            </li>
            <li>
              <span className="font-bold">Phone:</span> {gasData?.user?.phoneNumbers}
            </li>
            <li>
              <span className="font-bold">Address:</span> {gasData?.gasDetector?.location}
            </li>
          </ul>
        </div>
        <div className="shadow-md col-span-1 h-64 rounded-md mt-8 lg:mt-0 px-3 py-6 font-one bg-[#FAF9F6]">
          <h3 className="font-bold">Device Information</h3>
          <ul className="flex flex-col justify-around h-full">
            <li>
              <span className="font-bold">Mac-Address:</span> {gasData?.gasDetector?.macAddress}
            </li>
            <li>
              <span className="font-bold">Location:</span>{gasData?.gasDetector?.location}
            </li>
            <li className="flex items-center">
              <span className="font-bold">
                CO2: {gasData?.gasDetector?.co2}
              </span>
              <Progress
                progress={gasData?.gasDetector?.co2}
                className="w-20 ml-2"
              />
            </li>
            <li className="flex items-center">
              <span className="font-bold">
                Temperature: {gasData?.gasDetector?.temperature}°C
              </span>
              <Progress
                progress={gasData?.gasDetector?.temperature}
                className="w-20 ml-2"
              />
            </li>
            <li className="flex items-center">
              <span className="font-bold">
                Humidity: {gasData?.gasDetector?.humidity}%
              </span>{" "}
              <Progress
                progress={gasData?.gasDetector?.humidity}
                className="w-20 ml-2"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4 mt-8 md:mt-4">
        <div
          className="shadow-md col-span-1 h-68 rounded-md pr-2 bg-[#FAF9F6]
        "
        >
          <h3 className="font-bold pl-8 py-2">
            Live CO2 and Temperature Report
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#8884d8"
                name="Temperature"
              />
              <Line type="monotone" dataKey="co2" stroke="#82ca9d" name="CO2" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="shadow-md col-span-1 h-68 rounded-md mt-8 lg:mt-0">
          <NotificationsTableChunk />
        </div>
      </div>
    </div>
  );
};

export default Home;
