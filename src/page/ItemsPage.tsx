import React from "react";
import HeaderHome from "../components/HeaderHome";

const ItemsPage: React.FC = () => {
  return (
    <div className=" relative flex flex-col w-full h-full overflow-y-auto items-center py-5">
      <HeaderHome></HeaderHome>
    </div>
  );
};

export default ItemsPage;
