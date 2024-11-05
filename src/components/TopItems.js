import React, { useState } from 'react';
import ToggleButton from './ToggleButton';



const TopItems = ({ data, title }) => {
    const [activeTab, setActiveTab] = useState("volume");

    return (
        <div className="border-l p-4 w-full">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold flex-1">{title}</h3>
                <div className="flex bg-gray-100 rounded-full">
                    <ToggleButton
                        label="VALUE"
                        isActive={activeTab === "value"}
                        onClick={() => setActiveTab("value")}
                    />
                    <ToggleButton
                        label="VOL."
                        isActive={activeTab === "volume"}
                        onClick={() => setActiveTab("volume")}
                    />
                </div>
            </div>
            <div className="mt-4 space-y-2">
                {data.map((item) => (
                    <div
                        key={item.rank}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                    >
                        <div className="text-gray-700 font-medium">{item.rank}  {item.name}</div>
                        {activeTab === 'volume' ?
                            <div className="text-gray-800 border rounded-lg py-1 px-3 font-semibold">{item.volume}</div>
                            : <div className="text-gray-800 py-1 px-3 font-semibold">{item.value}</div>
                        }

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopItems;
