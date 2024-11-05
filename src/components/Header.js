import React from "react";
import { Calendar, Bell, Menu, Setting, Search, Profile } from "../assets";

const Header = () => {
    return (
        <div className="bg-primary text-white flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2 flex-1">
                <img className="cursor-pointer" src={Menu} alt="Menu" />
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-[#3830B7] w-1/3 text-xs relative pl-8 text-white placeholder-white px-4 py-2 rounded-lg focus:outline-none"
                    />
                    <img className="w-4 h-4 cursor-pointer absolute top-2 left-3" src={Search} alt="Calendar" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <img className="cursor-pointer" src={Calendar} alt="Calendar" />
                <img className="cursor-pointer" src={Bell} alt="Bell" />
                <img className="cursor-pointer" src={Setting} alt="Setting" />

                <div className="flex items-center bg-[#3830B7] px-4 py-2 rounded-lg space-x-2">
                    <div >
                        <p className="text-[11px]">rohan@etls.xyz</p>
                        <p className="text-[11px] font-bold">ETLS PVT. LTD.</p>
                    </div>
                    <img
                        src={Profile}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
