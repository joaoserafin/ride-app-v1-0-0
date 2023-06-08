import { MapContainer, Marker, Polygon, Popup, TileLayer, useMap, Circle, } from 'react-leaflet'
import { CRS } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.css'
import L from 'leaflet';
import { useEffect } from 'react';
import RideLocations from './rideLocations';
import { ManutLocations } from './manutLocations';



export default function Map(props) {



    const center = props.currentLocation ? props.currentLocation : [0, 0]

    const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
    const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
    const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

    const manutIcon = L.icon({
        iconUrl: 'MANUT_LOC_ICON.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        popupAnchor: [20, 0]
    });

    const rideIcon = L.icon({
        iconUrl: 'RIDE_LOC_ICON.png',
        iconSize: [40, 40], // size of the icon
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        popupAnchor: [20, 0]
    });




    const CustomTileLayer = () => {
        return MAPBOX_API_KEY ? (
            <TileLayer
                attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
            />
        ) : (
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        )
    }



    return (
        <MapContainer
            center={center}
            zoom={15}
            crs={CRS.EPSG3857}
            className={`${styles.mapTag}`}
            zoomControl={false}
            attributionControl={false}>
            <CustomTileLayer />
            <Circle
                weight="10"
                color={'#F25252'}
                key={'user'}
                center={center}
                radius={3} style={{ border: '5px solid #fff' }}
            />

            {/* MANUTENÇÃO */}
            {/* <Marker position={[-27.63948074832516, -52.28077070401094]} icon={rideIcon} >
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}


            {ManutLocations().map(elem => {
                return (
                    <Marker position={elem.loc} icon={manutIcon} >
                        <Popup>
                            {elem.name}
                        </Popup>
                    </Marker>

                )
            })}






        </MapContainer>
    )
}




// import * as React from "react";
// import { Map, TileLayer, Marker, Popup } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });



// const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
// const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
// const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

// export const MyMapComponent = (props) => {
//     return (
//         <Map center={[-27.63948074832516, -52.28077070401094]} zoom={13} style={{ height: '350px' }}>
//             <TileLayer
//                 attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//                 url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
//             />
//             <Marker position={[-27.63948074832516, -52.28077070401094]}>
//                 <Popup>
//                     A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//         </Map>
//     )
// }