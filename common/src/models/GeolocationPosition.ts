import { IriString } from '@openhps/rdf';

export interface GeolocationPosition {
    heading?: number;
    speed?: number;
    accuracy?: number;
    altitudeAccuracy?: number;
    lnglat?: number[];
    altitude?: number;
    timestamp?: number;
    procedure?: {
        label?: string;
        comments?: string;
        uri?: IriString;
    };
    deployment?: {
        label?: string;
        comments?: string;
        uri?: IriString;
        geometry?: number[][];
    };
}
