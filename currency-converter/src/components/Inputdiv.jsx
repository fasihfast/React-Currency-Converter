import React from 'react'
import { useId } from 'react'

function Inputdiv({label,amount,amountChange,currencyChange,selectedCurrency="usd",amountDisable=false,currencyDisable=false,currencyArray=[]}) {
    const amountInputId=useId();
  return (
   <div className = "bg-white p-3 rounded-lg text-sm flex border-none">
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5  text-2xl text-cyan-800"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => amountChange && amountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-600 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => currencyChange && currencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                        {currencyArray.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
  )
}

export default Inputdiv