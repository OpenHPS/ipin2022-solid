import 'reflect-metadata';
export * from './Observation';
export * from './FeatureOfInterest';
export * from './ObservableProperty';
export * from './QuantityValue';
export * from './Geometry';
export * from './PointGeometry';
export * from './PolygonGeometry';
export * from './System';
export * from './Platform';
export * from './Deployment';
export * from './Address';
export * from './PropertyAccuracy';
export * from './Procedure';
export * from './GeolocationPosition';
export * as Spaces from './Spaces';

const BASE_URI = "http://openhps.github.io/ipin2022-solid/tracking.ttl#";
export { BASE_URI };
