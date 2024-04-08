import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCity } from "../Context/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
function Map() {
  const { isLoading, position, getPosition } = useGeolocation();
  const { data } = useCity();
  const [lat, lng] = useUrlPosition();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  useEffect(() => {
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);
  useEffect(
    function () {
      if (position)
        setMapPosition([Number(position.lat), Number(position.lng)]);
    },
    [position]
  );
  return (
    <div className={styles.mapContainer}>
      {!position && (
        <Button type="Position" onclick={getPosition}>
          {isLoading ? <p>Loading...</p> : <p>Use Your Location</p>}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {data.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.emoji} {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
export default Map;
