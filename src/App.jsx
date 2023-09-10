import InputSelect from "./components/InputSelect";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useEffect, useState } from "react";
import useCurrencyFetch from "./hooks/useCurrencyFetch";
import Loading from "./components/Loading";

const App = () => {
  const [countries, setCountries] = useState();
  const [currencies, setCurrencies] = useState();
  const { loading, currencyLists, countryLists } = useCurrencyFetch();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("MMK");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (countryLists) {
      setCountries(
        Object.entries(countryLists).map(([key, value]) => ({
          key,
          value,
        }))
      );
    }
  }, [countryLists]);

  useEffect(() => {
    if (currencyLists) {
      setCurrencies(
        Object.entries(currencyLists).map(([key, value]) => ({
          key,
          value,
        }))
      );
    }
  }, [currencyLists]);
  // console.log('currencies', currencies);
  // console.log(currencyLists)

  const convert = (e) => {
    e.preventDefault();
   try {
    const rateTo = currencies?.find((currency) => currency?.key.includes(to));
    if (from == "USD") {
      const fromTo = 1 * Number(rateTo?.value);
      const result = (fromTo * amount).toFixed(2);
      setValue(result + " " + to);
    } else {
      const rateFrom = currencies?.find((currency) =>
        currency?.key.includes(from)
      );
      const fromTo = Number(1 / rateFrom?.value) * Number(rateTo?.value);
      const result = (fromTo * amount).toFixed(2);
      setValue(result + " " + to);
    }
   } catch (error) {
      console.log(error)
    
   }
  };


  const handleReverse = () => {
    setFrom(to);
    setTo(from);
  };

  if (loading) return <Loading />;

  return (
    <>
      {countries?.length > 0 ? (
        <div className="bg-gray-100">
          <div className=" container mx-auto flex flex-col justify-center w-full  items-center h-screen">
            <div>
              <h1 className=" text-2xl my-8 font-medium text-center">
                Currency Converter
              </h1>

              <div className="  bg-white  p-5  rounded-md shadow-sm   w-full  md:w-[500px]  border-t-8  border-blue-500">
                <div className="   text-center space-y-3">
                  <h3 className=" text-gray-400 ">Excange Rate</h3>
                  <h1 className="  text-3xl font-medium">{currencies ==undefined ? 0: value}</h1>
                </div>

                <form action="" onSubmit={convert}>
                  <div className="  flex flex-col mt-5">
                    <label className=" my-1  text-sm text-gray-400">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="  border outline-none  p-2 rounded-md text-lg"
                      placeholder=" Enter your amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>

                  <div className=" flex  flex-col gap-3 mt-5 ">
                    <div className=" ">
                      <InputSelect
                        label="From"
                        value={from}
                        data={countries}
                        setValue={setFrom}
                      />
                    </div>

                    <div className="  grid  place-items-center  md:pb-2">
                      <HiOutlineSwitchHorizontal
                        size={24}
                        className=" cursor-pointer"
                        onClick={handleReverse}
                      />
                    </div>

                    <div className=" ">
                      <InputSelect
                        label="To"
                        value={to}
                        setValue={setTo}
                        data={countries}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" bg-blue-500 p-3 w-full text-white uppercase rounded-md font-medium my-8 "
                  >
                    Convert
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default App;
