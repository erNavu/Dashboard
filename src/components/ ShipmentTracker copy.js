
import React from "react";
import { GoogleMap, Polyline, LoadScript } from "@react-google-maps/api";
import { PATH_COORDINATES, MAP_CENTER } from '../data/constant'
const ShipmentTracker = () => {

    const shipmentId = "#0124BCD";
    const category = "Electronics";
    const weight = "329 kg";
    const destination = "Bangalore";
    const arrivalTime = "2 Hrs";

    const mapContainerStyle = {
        width: "100%",
        height: "300px",
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500">Shipment ID:</span>
                <span className="font-bold text-gray-700">{shipmentId}</span>
            </div>
            <div className="mb-4">
                <div className="text-sm font-semibold text-gray-500">Category:</div>
                <div className="text-lg font-bold text-gray-700">{category}</div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-gray-500">Total Weight:</div>
                <div className="font-bold text-gray-700">{weight}</div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-gray-500">Destination:</div>
                <div className="font-bold text-gray-700">{destination}</div>
            </div>
            <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-gray-500">Est. Arrival:</div>
                <div className="font-bold text-gray-700">{arrivalTime}</div>
            </div>
            <div className="mt-4">
                <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={MAP_CENTER}
                        zoom={5}
                    >
                        <Polyline
                            path={PATH_COORDINATES}
                            options={{
                                strokeColor: "#4285F4",
                                strokeOpacity: 1,
                                strokeWeight: 4,
                            }}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div >
    );
};

export default ShipmentTracker;
