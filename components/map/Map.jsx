import { MapContainer, Marker, Polygon, Popup, TileLayer, useMap } from 'react-leaflet'
import { CRS } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './Map.module.css'


export default function Map(props) {

    const center = [51.505, -0.09]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    // const coordenadas = [[-51.305214119290966, -27.596377623790801], [-51.304321314526419, -27.598190288009736], [-51.305674049018158, -27.599380694362466], [-51.307919588274451, -27.599191311533623], [-51.30924526807636, -27.596918717587496], [-51.309109994627185, -27.596485842550141], [-51.305214119290966, -27.596377623790801]]

    const purpleOptions = { color: 'purple' }

    return (
        <MapContainer
            center={center}
            zoom={3}
            crs={CRS.EPSG3857}
            className={`${styles.mapTag}`}
            zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[0, 0]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>



        </MapContainer>
    )
}