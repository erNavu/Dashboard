import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Truck, ShipmentArrow } from "../assets";
const ShipmentCard = ({ shipment }) => {
    const memoizedShipmentCard = useMemo(() => (
        <div className='p-4 bg-border border border-border rounded-lg space-x-3'>
            <div className="flex items-center ">
                <div>
                    <div className="text-[10px] text-light">Shipment ID</div>
                    <div className="font-bold text-gray-900">{shipment.id}</div>
                </div>
                <div className="flex-grow flex justify-end">
                    <div className="relative w-24 h-12">
                        <div className="w-3/4 h-3/4 ml-7 bg-blue-100">
                            <div
                                className="bg-primary h-full flex items-center justify-center text-white text-[10px]"
                                style={{ width: shipment.progress }}
                            >
                                {shipment.progress}
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <img
                                src={Truck}
                                alt="Truck Icon"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start mt-2 ml-[0!important] space-x-1">
                <span className="text-green-500">&#9679;</span>
                <span className="text-[10px]">{shipment.fromAddress}</span>
                <img alt="ArrowRight" src={ArrowRight} />
                <img alt="ShipmentArrow" src={ShipmentArrow} />
                <span className="text-[10px]">{shipment.toAddress}</span>
            </div>
        </div>
    ), [shipment]);

    return memoizedShipmentCard;
}

ShipmentCard.propTypes = {
    shipment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        progress: PropTypes.string.isRequired,
        fromAddress: PropTypes.string.isRequired,
        toAddress: PropTypes.string.isRequired,
    }).isRequired,
};

export default ShipmentCard