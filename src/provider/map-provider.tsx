import { ReactNode, createContext, useContext, useState } from 'react'
import { LocationFieldsType, MapContextType } from '../types';

const defaultLocation: LocationFieldsType = {
  latitude: 23.37,
  longitude: 85.32,
  unit: 'imperial',
}

export const MapContext = createContext<MapContextType>({
  locationFields: defaultLocation,
  locationDetails: true,
  setLocationFields: () => {},
  onLocationChange: () => {},
  setLocationDetails: () => {}
});

export default function MapProvider({ children }: {
  children: ReactNode
}) {
  const [locationFields, setLocationFields] = useState<LocationFieldsType>(defaultLocation)
  const [locationDetails, setLocationDetails] = useState<boolean>(true);

  const onLocationChange = (latitude: number, longitude: number) => {
    setLocationFields({ ...locationFields, latitude, longitude })
  }

  return (
    <MapContext.Provider value={{
      locationFields,
      locationDetails,
      setLocationFields,
      onLocationChange,
      setLocationDetails
    }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMapProvider = () => useContext(MapContext);