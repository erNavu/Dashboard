import React, { useState } from 'react'
import { World } from '../assets'
import ToggleButton from './ToggleButton'
import { ALL_REGIONS } from '../data/constant'

export const Spotlight = () => {
    const [activeTab, setActiveTab] = useState(2);
    return (
        <div>
            <div className='flex justify-between items-center mb-4 '>
                <h3 className="font-semibold">Spotlight</h3>
                <button className='text-[10px] bg-gray-100 border py-1 rounded-lg px-2'>{ALL_REGIONS}</button>
            </div>
            <img alt="world_img" src={World} />
            <div className="flex items-center space-x-2">
                <div className="flex mt-7 bg-gray-100 rounded-full">
                    <ToggleButton
                        label="SUPPLIERS"
                        isActive={activeTab === 1}
                        onClick={() => setActiveTab(1)}
                    />
                    <ToggleButton
                        label="CLIENTS"
                        isActive={activeTab === 2}
                        onClick={() => setActiveTab(2)}
                    />
                </div>
            </div>
        </div>
    )
}
