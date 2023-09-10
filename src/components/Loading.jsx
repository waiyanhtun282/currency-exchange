import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <AiOutlineLoading size={30} className=" animate-spin" />
    </div>
  );
};

export default Loading;
