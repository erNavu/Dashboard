import React from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ShipmentDetails from "./ShipmentDetails";
import { SHIPMENT_DETAILS_DATA } from '../data/dummyData'
import { PATH_COORDINATES, MAP_CENTER, SHIPMENT_ID } from '../data/constant';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ShipmentTracker = () => (
    <div className="ml-2 mt-4 lg:mt-0">
        <span className="text-sm bg-border border border-[#E9E9E9] px-3 py-1 mb-1 rounded-full">
            ID:<span className="font-bold">{SHIPMENT_ID}</span>
        </span>
        <div className="mb-4 mt-2 rounded-full">
            <MapContainer center={MAP_CENTER} zoom={9} style={{ height: "260px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Polyline
                    positions={PATH_COORDINATES}
                    pathOptions={{ color: "#4285F4", weight: 4 }}
                />
                {PATH_COORDINATES.map((position, index) => (
                    <Marker key={index} position={position}>
                        <Popup>
                            {index === 0 ? "Start: Patiala" : index === 1 ? "Midpoint" : "Destination: Mohali"}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
        <ShipmentDetails details={SHIPMENT_DETAILS_DATA} />
    </div>
);

export default ShipmentTracker;
