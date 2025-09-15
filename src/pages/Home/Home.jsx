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
import { useState } from "react";

const Home = () => {

  const [chartData] = useState([
    { time: "12:00", temp: 22, co2: 20 },
    { time: "12:30", temp: 23, co2: 21 },
    { time: "13:00", temp: 24, co2: 22 },
    { time: "13:30", temp: 25, co2: 23 },
  ]);
  
  return (
    <div className="relative z-[-1]  pt-16 ">
      <h3 className="font-one font-bold text-lg py-3">Dashboard</h3>
      <div className="lg:grid lg:grid-cols-2 gap-4">
        <div className="shadow-md col-span-1 h-64 rounded-md px-3 py-6 font-one bg-[#FAF9F6]">
          <h3 className="font-bold">User Information</h3>
          <ul className="flex flex-col justify-around h-full">
            <li>
              <span className="font-bold">Name:</span> John Doe
            </li>
            <li>
              <span className="font-bold">Email:</span> johndoe@gmail.gmail.com
            </li>
            <li>
              <span className="font-bold">Phone:</span> +234 8012345678
            </li>
            <li>
              <span className="font-bold">Address:</span> 123 Main St, City,
              Country
            </li>
          </ul>
        </div>
        <div className="shadow-md col-span-1 h-64 rounded-md mt-8 lg:mt-0 px-3 py-6 font-one bg-[#FAF9F6]">
          <h3 className="font-bold">Device Information</h3>
          <ul className="flex flex-col justify-around h-full">
            <li>
              <span className="font-bold">Mac-Address:</span> 80:MC:30AC:NB
            </li>
            <li>
              <span className="font-bold">Location:</span> 123 Main St, City,
              Country
            </li>
            <li className="flex items-center">
              <span className="font-bold">CO2: 20%</span>
              <Progress progress={20} className="w-20 ml-2" />
            </li>
            <li className="flex items-center">
              <span className="font-bold">Temperature: 22°C</span>
              <Progress progress={22} className="w-20 ml-2" />
            </li>
            <li className="flex items-center">
              <span className="font-bold">Humidity: 20%</span>{" "}
              <Progress progress={20} className="w-20 ml-2" />
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-4 mt-8 md:mt-4">
        <div className="shadow-md col-span-1 h-68 rounded-md pr-2 bg-[#FAF9F6]
        ">
          <h3 className="font-bold pl-8 py-2">Live CO2 and Temperature Report</h3>
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
