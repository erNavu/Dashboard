import React from "react";
import { Logo, ArrowDown } from "../assets";

const GreetingHeader = () => {
    return (
        <div className="sm:flex items-center justify-between bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex space-x-4 sm:space-x-6">
                <div className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center">
                    <img src={Logo} alt='logo' />
                </div>
                <div >
                    <p className="lg:text-2xl font-semibold">Hello, Rahul</p>
                    <p className="text-sm text-gray-500">ORUE PVT. LTD.</p>
                </div>
                <button className="bg-secondary h-8 text-white px-3 py-1 rounded-md text-[11px] font-bold">
                    CUSTOMER
                </button>
            </div>

            <div>
                <button className="bg-gray-100 flex h-8 text-gray-700 px-3 py-2 text-[11px] rounded-md border border-[#E9E9E9] hover:bg-gray-200">
                    LAST 30 DAYS <span className="ml-1 mt-1"><img alt="arrow" src={ArrowDown} /></span>
                </button>
            </div>
        </div>
    );
};

export default GreetingHeader;
