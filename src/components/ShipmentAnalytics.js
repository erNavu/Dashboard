import React from "react";
import ShipmentCard from "./ShipmentCard";
import { SHIPMENT_CARD_DATA } from '../data/dummyData'
import { Filter } from '../assets'


const ShipmentAnalytics = () => (
    <>
        <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold">Shipment Analytics</h1>
            <button className="flex font-bold items-center text-xs bg-border border border-[#E9E9E9] px-2 py-1 rounded-md hover:bg-gray-200">
                <img className="mr-2 w-3 h-3" src={Filter} alt="Filter icon" />
                FILTERS
            </button>
        </div>

        <div className="space-y-4 h-72 overflow-y-auto scrollable">
            {SHIPMENT_CARD_DATA.map(shipment => (
                <ShipmentCard key={shipment.id} shipment={shipment} />
            ))}
        </div>
    </>
);

export default ShipmentAnalytics;
