import React from "react";
import "./style.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Mapa(){
    return(
        
        <MapContainer center={[-25.448431245504, -49.25946724454275]} zoom={13}scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
        
    )
}

export { Mapa };