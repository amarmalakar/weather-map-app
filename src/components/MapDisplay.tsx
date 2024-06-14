import { MapContainer, TileLayer, Marker, useMapEvents, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { useMapProvider } from '../provider/map-provider';

const zoom = 13;
const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapDisplay: React.FC = () => {
  const { locationFields, onLocationChange } = useMapProvider();
  const { latitude, longitude } = locationFields;

  const LocationMarker = () => {
    const map = useMap();
    
    useEffect(() => {
      map.setView([latitude, longitude], map.getZoom());
    }, [latitude, longitude, map]);

    useMapEvents({
      click: (e) => {
        onLocationChange(e.latlng.lat, e.latlng.lng);
      },
    });

    return <Marker position={[latitude, longitude]} icon={markerIcon}></Marker>;
  };

  return (
    <MapContainer 
      center={[latitude, longitude]} 
      zoom={zoom} 
      style={{ height: '100vh', width: '100%' }} 
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <ZoomControl position='bottomright' />
    </MapContainer>
  );
};

export default MapDisplay;
