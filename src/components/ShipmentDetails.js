import React from "react";
const ShipmentDetails = React.memo(({ details }) => (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {details.map(({ label, value }, index) => (
            <div
                className={`px-2 ${index < details.length - 1 ? 'border-r border-gray-300' : ''}`}
                key={index}
            >
                <p className="text-xs leading-8 text-light">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
            </div>
        ))}
    </div>
))
export default ShipmentDetails