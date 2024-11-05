import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { INVENTORY_OVERVIEW_DATA } from '../data/dummyData';
import ToggleButton from './ToggleButton';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InventoryOverview = () => {
    const [activeTab, setActiveTab] = useState("Weekly");
    const data = activeTab === "Weekly" ? INVENTORY_OVERVIEW_DATA.weeklyData : INVENTORY_OVERVIEW_DATA.dailyData;

    const toggleButtons = useMemo(() =>
        ["Daily", "Weekly"].map(label => (
            <ToggleButton
                key={label}
                label={label}
                isActive={activeTab === label}
                onClick={() => setActiveTab(label)}
            />
        )), [activeTab]
    );

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: { display: false },
                title: {
                    display: true,
                    text: 'Total items in 1000s',
                    color: 'gray',
                    font: { size: 14, family: 'Arial' },
                },
                border: {
                    dash: [5, 5],
                    display: false
                },
            },
            x: {
                grid: { display: false },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 10,
                    font: { size: 12, weight: 'normal', family: 'Arial' },
                    color: 'gray',
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full h-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Inventory Overview</h2>
                <div className="flex items-center space-x-2">
                    <div className="flex bg-gray-100 rounded-full">
                        {toggleButtons}
                    </div>
                </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">
                In-Stock Products: <span className="font-bold">3,200 Units</span>
            </p>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default InventoryOverview;

