import React from "react";
const ShipmentDetails = ({ details }) => {

    return (
        <div className="grid grid-cols-2 lg:grid-cols-5  gap-2 ">
            {details.map((detail, index) => (
                <div className={index < details.length - 1 && "border-r border-gray-300 px-2"} key={index}>
                    <p className="text-xs leading-8 text-light">{detail.label}</p>
                    <p className="text-sm font-semibold ">{detail.value}</p>
                </div>
            ))}
        </div>
    );
};
export default ShipmentDetails