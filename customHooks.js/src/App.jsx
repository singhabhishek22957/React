import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./Hooks/useCurrency.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromValue, setFromValue] = useState("usd");
  const [toValue, setToValue] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromValue);
  const options = Object.keys(currencyInfo);
  // console.log( options);

  const swap = () => {
    setFromValue(toValue);
    setToValue(fromValue);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toValue]);
  };

  return (
    <>
      <h1 className=" text-white text-center bg-gray-900 font-mono text-3xl py-3">
        Currency Chai
      </h1>

      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/68912/pexels-photo-68912.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={Object.keys(currencyInfo)}
                  onCurrencyChange={(currency) => setAmount(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={fromValue}
                />

               
              </div>

              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label="TO"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setToValue(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={toValue}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {fromValue.toUpperCase()} to {toValue.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
