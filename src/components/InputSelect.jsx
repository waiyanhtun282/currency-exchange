import React from "react";

const InputSelect = ({ label,value,setValue }) => {
    // console.log(value);
  return (
    <div >
      <label htmlFor="countries" className="block mb-2 text-sm  text-gray-400 ">
        {label}
      </label>
      <select
        id="countries" 
        defaultValue={value}
        onChange={(e) =>setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md w-full h-[40px] px-2 outline-none "
      >
        <option selected="" >Choose a Currency</option>
        <option value="US">United States</option>
        
      </select>
    </div>
  );
};

export default InputSelect;
