import React from "react";

export default function DashbordSlider() {
  return (
    <div className="rtl-theme">
      <div>
        <div className="img">
          <img src="/images/DashbordSlider/1.jpg" alt="" />
        </div>
        <div className="bg-main-bg-web-dark text-start p-3">
          <div className="up">
            <h4>دیشب</h4>
            <h4 className="text-main-gray-text-admin text-sm">فیلم ها</h4>
          </div>
          <div className="down mx-5 mt-3 text-sm text-main-gray-text-admin flex gap-4 items-center">
            <div className="l flex items-center gap-1">
              <i className="bx bxs-tv"></i>
              <h4>144</h4>
            </div>
            <div className="r flex gap-1 items-center">
              <i className="bx bxs-download"></i>
              <h4>20 k</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
