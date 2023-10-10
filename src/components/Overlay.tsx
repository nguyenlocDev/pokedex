import React from "react";

interface Props {
  children: any;
}

const Overlay: React.FC<Props> = (props) => {
  return (
    <div className="w-full h-full absolute top-0 left-0 bg-backgroundColorBottom/80 z-10 flex items-center justify-center ">
      {props.children}
    </div>
  );
};

export default Overlay;
