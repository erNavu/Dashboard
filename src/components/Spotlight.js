import React, { useState } from 'react';
import { World } from '../assets'
import ToggleButton from './ToggleButton'
import { ALL_REGIONS } from '../data/constant'

const INITIAL_ACTIVE_TAB = 2;

export const Spotlight = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(INITIAL_ACTIVE_TAB);

    return (
        <section>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Spotlight</h3>
                <button className="text-xs bg-gray-100 border py-1 rounded-lg px-2">
                    {ALL_REGIONS}
                </button>
            </div>
            <img alt="World" src={World} className="w-full" />
            <div className="flex items-center space-x-2 mt-7">
                <div className="flex bg-gray-100 rounded-full">
                    {['SUPPLIERS', 'CLIENTS'].map((label, index) => (
                        <ToggleButton
                            key={label}
                            label={label}
                            isActive={selectedTabIndex === index + 1}
                            onClick={() => setSelectedTabIndex(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
