import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import { datas } from "../data/datas";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="p-2">
        <button className="flex items-center gap-2 py-4">
          <HomeOutlinedIcon />
          <div className="">Dashboard</div>
        </button>
        <button className="flex items-center gap-2 py-4">
          <HomeOutlinedIcon />
          <div className="">Dashboard</div>
        </button>
        <button className="flex items-center gap-2 py-4">
          <HomeOutlinedIcon />
          <div className="">Dashboard</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
