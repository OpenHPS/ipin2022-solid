export interface GeolocationPosition {
    heading?: number;
    speed?: number;
    accuracy?: number;
    altitudeAccuracy?: number;
    lnglat?: number[];
    altitude?: number;
    timestamp?: number;
    procedure?: string;
    deployment?: string;
}
