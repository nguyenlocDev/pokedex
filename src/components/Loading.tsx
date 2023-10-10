import React from "react";
import Overlay from "./Overlay";

const Loading: React.FC = () => {
  return (
    <Overlay>
      <div className="relative">
        <div className=" w-[80px] h-[80px] absolute border-t-4  top-1/2 left-1/2 t  border-r-4 border-blue-400 rounded-full animate-spinLoad "></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/188/188940.png"
          alt="ball"
          className="w-[70px] object-cover  cursor-pointer"
        />
      </div>
    </Overlay>
  );
};

export default Loading;
