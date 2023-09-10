const InputSelect = ({ label, value, setValue, data }) => {
  return (
    <div>
      <label htmlFor="countries" className="block mb-2 text-sm  text-gray-400 ">
        {label}
      </label>
      <select
        id="countries"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md w-full h-[45px] p-2 outline-none "
      >
        {data?.map((currency) => (
          <option key={currency?.key} value={currency?.key}>
            {currency?.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
