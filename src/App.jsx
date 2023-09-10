import InputSelect from "./components/InputSelect";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import objectToArray from "./utils/objectToArray";

const App = () => {
  const [currency,setCurrency] =useState();
  const { loading ,data} =useFetch("list");
  const [from,setFrom] =useState();
  const [to,setTo] =useState();
  // let currencies = objectToArray(data?.quotes);
  useEffect(() =>{
    if(data){
      setCurrency(objectToArray(data?.currencies));
    }
  },[data]);
  
  console.log(currency)
  if(loading) return <p>Loading...</p>;
  return (
    <div className="   bg-gray-100">
      <div className=" container mx-auto flex flex-col justify-center w-full  items-center h-screen">
        <h1 className=" text-2xl my-8 font-medium text-center">
          Simple Currency Converter
        </h1>

        <div className="  bg-white  p-5  rounded-md shadow-sm   w-[95%]  md:w-[450px]  border-t-8  border-blue-500">
          <div className="   text-center space-y-3">
            <h3 className=" text-gray-400 ">Excange Rate</h3>
            <h1 className="  text-3xl font-medium">$122</h1>
          </div>

          <div className="  flex flex-col mt-5">
            <label className=" my-1  text-sm text-gray-400">Amount</label>
            <input
              type=" text"
              className="  border outline-none  p-2 rounded-md text-lg"
              placeholder=" Enter your amount"
            />
          </div>

          <div className=" flex  flex-col gap-3 md:flex-row   md:items-end md:justify-between  mt-5 ">

            <div className=" ">
              <InputSelect label="From"  value={''}/>
            </div>

            <div className="  grid  place-items-center  md:pb-2">
              <HiOutlineSwitchHorizontal  size={24} className=" cursor-pointer"/>
            </div>

            <div className=" ">
              <InputSelect label="To" value={''} />
            </div>
          </div>

          <button className=" bg-blue-500 p-2 w-full text-white uppercase rounded-md font-medium my-8 ">Convert</button>
        </div>
      </div>
    </div>
  );
};

export default App;
