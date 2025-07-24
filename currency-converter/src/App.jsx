import { useState } from 'react'
import './App.css'
import Inputdiv from './components/Inputdiv'
import useCurrencyinfo from "./hooks/useCurrencyinfo"


function App() {
  const [To,setTo]=useState("usd");
  const [From,setFrom] =useState("pkr");
  const [amount,setAmount]=useState(1);
  const [convertedAmount,setConvertedAmount]=useState(1);

  const currencyInfo= useCurrencyinfo(From);

  const currencyOptions= Object.keys(currencyInfo)

  const swap = () =>{
    
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
    setAmount(convertedAmount);

  }

  const convertbtn=()=> 
    { 
      setConvertedAmount(amount * currencyInfo[To]); }

     return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60  p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convertbtn();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Inputdiv
                                label="From"
                                amount={amount}
                                currencyArray={currencyOptions}
                                currencyChange={(currency)=>setFrom(currency)}
                                selectedCurrency={From}
                                amountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Inputdiv
                                label="To"
                                amount={convertedAmount}
                                currencyArray={currencyOptions}
                                currencyChange={(currency)=>setTo(currency)}
                                selectedCurrency={To}
                                amountDisable
                                amountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg">
                            Convert {From.toUpperCase()} to {To.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
