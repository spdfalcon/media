import React from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
} from "recharts";
export default function ChartUaersAdmin() {
  const data = [
    { name: "بازدید روزانه", value: 400 },
    { name: "مشتریان غیر فعال من را با خبر کنید", value: 300 },
    { name: "مشتریان فعال من را با خبر کنید", value: 300 },
    { name: "مشتریان جدید", value: 200 },
  ];
  const COLORS = ["#007AFF", "#858EA3", "#F68A04", "#E20E02"];
  return (
    <>
      <div className="rtl-theme mt-8 mx-8 bg-second-bg-web-dark h-full rounded-md text-main-gray-text-admin">
        <div className="text-center text-xl font-bold py-5 border-b border-b-main-bg-web-dark">
          <h3>آمار کاربران</h3>
        </div>
        <div className="flex justify-center items-center ">
          <PieChart width={300} height={300} data={data}>
            <Tooltip></Tooltip>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={85}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="p-4 md:grid md:grid-cols-2 lg:grid-cols-1  text-sm">
          <div className="flex flex-col md:flex-row gap-3 mt-8">
            <div className="flex bg-main-bg-web-dark justify-start items-center gap-4 p-4 rounded-md">
              <div className="bg-main-red-admin w-5 h-5 rounded-md  "></div>
              <h4>مشتریان جدید</h4>
            </div>
            <div className="flex bg-main-bg-web-dark justify-start items-center gap-4 p-4 rounded-md">
              <div className="bg-main-orang-admin w-5 h-5 rounded-md "></div>
              <h4>مشتریان فعال من را با خبر کنید</h4>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-8">
            <div className="flex bg-main-bg-web-dark justify-start items-center gap-4 p-4 rounded-md">
              <div className="bg-main-blue-admin w-5 h-5 rounded-md "></div>
              <h4>بازدید روزانه</h4>
            </div>
            <div className="flex bg-main-bg-web-dark justify-start items-center gap-4 p-4 rounded-md">
              <div className="bg-main-gray-admin w-5 h-5 rounded-md "></div>
              <h4>مشتریان غیرفعال من را با خبر کنید</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
