import React, { useState, useCallback } from "react";
import * as Icons from '../assets';
import { SIDEBAR_DATA } from '../data/dummyData';
import SidebarTab from "./SidebarTab";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const handleSetActiveTab = useCallback((name) => setActiveTab(name), []);

    const MemoizedSidebarTab = React.memo(SidebarTab);

    return (
        <div className="hidden fixed left-0 top-0 h-full w-[70px] bg-white py-4 border-r border-gray-200 sm:flex  flex-col">
            <div className="mb-8 flex justify-center">
                <img src={Icons['CompanyLogo']} alt="Logo" className="w-8 h-8" />
            </div>
            <div className=" flex-1 flex flex-col justify-between items-center">

                <div className="space-y-4">
                    {SIDEBAR_DATA.map((tab) => (
                        <MemoizedSidebarTab key={tab.name} tab={tab} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
                    ))}
                </div>

                <div className="space-y-4 mb-1 ">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full text-white">
                        <img alt='help' src={Icons['Help']} />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200">
                        <img alt='setting' src={Icons['SettingBlack']} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;