import { Form, useLoaderData } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Inventory = () => {
  const inventoryData = [
    { bloodType: "A+", units: 25 },
    { bloodType: "B+", units: 30 },
    { bloodType: "O+", units: 20 },
    { bloodType: "AB+", units: 15 },
    { bloodType: "A-", units: 10 },
    { bloodType: "B-", units: 12 },
    { bloodType: "O-", units: 8 },
    { bloodType: "AB-", units: 5 },
  ];

  const data = useLoaderData();

  const inventory = data.bloodBank.inventory;


  return (
    <div className="  flex items-center justify-center w-full h-full ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={inventory}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="bloodGroup"
            scale="point"
            padding={{ left: 30, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="quantity"
            fill="#d63031"
            background={{ fill: "#eee" }}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Inventory;
