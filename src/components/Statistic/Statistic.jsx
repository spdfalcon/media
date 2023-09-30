import React from "react";
export default function Statistic({ title, icon, number, Percent, bgcolor , txcolor }) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-second-bg-web-dark p-5 text-white w-full rounded-md rtl-theme">
        <div className="up flex justify-between items-center">
          <h4 className="text-main-gray-text-admin text-sm md:text-base">{title}</h4>
          <div
            className={` w-10 h-10 rounded-full flex justify-center items-center ${bgcolor}`}
          >
            <i className={`bx bxs-${icon}`}></i>
          </div>
        </div>
        <div className="down flex justify-between items-center">
          <h3 className="text-2xl font-bold">{number}</h3>
          <div
            className={`flex justify-center items-center gap-1 ${txcolor}`}
          >
            <div className={``}>
              {Percent > 50 ? (
                <i className="bx bxs-up-arrow"></i>
              ) : (
                <i className="bx bxs-down-arrow"></i>
              )}
            </div>
            <h4>{Percent}%</h4>
          </div>
        </div>
      </div>
    </>
  );
}
