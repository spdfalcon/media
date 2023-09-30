import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartGrouping() {
  const data = [
    {
      name: "A",
      LastMonth: 38,
      thisMonth: 45,
    },
    {
      name: "B",
      LastMonth: 42,
      thisMonth: 57,
    },
    {
      name: "C",
      LastMonth: 20,
      thisMonth: 30,
    },
    {
      name: "D",
      LastMonth: 40,
      thisMonth: 60,
    },
  ];

  return (
    <>
    
      <div className="flex flex-col justify-center items-center bg-second-bg-web-dark mx-8 rounded-md p-4">
        <div className="text-xl font-bold w-full text-center py-4 border-b border-main-bg-web-dark"><h2>دسته بندی ها</h2></div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={730} height={250} data={data} className="mt-2">
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="LastMonth" fill="#E20E02" />
            <Bar dataKey="thisMonth" fill="#007AFF" />
          </BarChart>
          </ResponsiveContainer>
      </div>
    </>
  );
}
