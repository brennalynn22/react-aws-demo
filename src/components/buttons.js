import React from "react";
import "./buttons.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutlined";

const Buttons = () => {
  return (
    <div>
      <button className="delete">
        {/* <DeleteOutlineIcon /> */}
        Delete
      </button>
      <button>Update</button>
    </div>
  );
};

export default Buttons;
