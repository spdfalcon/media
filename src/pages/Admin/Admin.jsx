import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import Statistics from "../../components/Statistics/Statistics";
import DashboardSliders from "../../components/DashboardSliders/DashboardSliders";
import ChartUaersAdmin from "../../components/ChartUaersAdmin/ChartUaersAdmin";
import ChartGrouping from "../../components/ChartGrouping/ChartGrouping";
import FavoritesChart from "../../components/FavoritesChart/FavoritesChart";
export default function Admin() {
  return (
    <div className="flex flex-col relative ltr-theme bg-main-bg-web-dark">
      <TopBar />
      {/* <div className="container rtl-theme">
                <div className="p-main bg-green-600">
                    ممد جون این دیو برا توعه
                </div>
            </div> */}
      <div className="md:mr-20 rtl-theme">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="">
              <Statistics></Statistics>
            </div>
            <div className="">
              <DashboardSliders></DashboardSliders>
            </div>
          </div>
          <div className="col-span-1 ">
            <ChartUaersAdmin></ChartUaersAdmin>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 mt-5">
          <div className="lg:col-span-1">
            <ChartGrouping></ChartGrouping>
          </div>
          <div className="lg:col-span-2">
            <FavoritesChart></FavoritesChart>
          </div>
        </div>
      </div>
    </div>
  );
}
