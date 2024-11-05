import React, { useState } from 'react';
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


    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Total items in 1000s',
                    color: 'gray',
                    font: {
                        size: 14,
                        family: 'Arial',
                    },
                },
                grid: {
                    borderDash: [5, 5], // Dashed lines for the y-axis grid
                    color: 'rgba(200, 200, 200, 0.4)', // Light gray color for dashed lines
                },
                border: {
                    display: false, // Hide the left y-axis line
                },
            },
            x: {
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                align: 'end', // Aligns the legend to the right
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    boxWidth: 10,
                    font: {
                        size: 12,
                        weight: 'normal',
                        family: 'Arial',
                    },
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
                        <ToggleButton
                            label="Daily"
                            isActive={activeTab === "Daily"}
                            onClick={() => setActiveTab("Daily")}
                        />
                        <ToggleButton
                            label="Weekly"
                            isActive={activeTab === "Weekly"}
                            onClick={() => setActiveTab("Weekly")}
                        />
                    </div>
                </div>
            </div>
            <p className="text-gray-500 text-sm mb-2">In-Stock Products: <span className="font-bold">3,200 Units</span></p>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default InventoryOverview;
