import { Dispatch, SetStateAction } from "react";

export type UnitType = 'metric' | 'imperial';

export interface LocationFieldsType {
    latitude: number;
    longitude: number;
    unit: UnitType;
}

export interface MapContextType {
    locationFields: LocationFieldsType;
    locationDetails: boolean;
    setLocationFields: (location: LocationFieldsType) => void;
    onLocationChange: (lat: number, lng: number) => void;
    setLocationDetails: Dispatch<SetStateAction<boolean>>;
}