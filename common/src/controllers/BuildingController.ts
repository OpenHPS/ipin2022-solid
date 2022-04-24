import { building } from '../models/Spaces';
import { AbsolutePosition, DataObjectService, GeographicalPosition, MemoryDataService } from '@openhps/core';
import { SymbolicSpace } from '@openhps/geospatial';
import { Spaces, BASE_URI } from '../models';

/**
 * Building controller
 */
export class BuildingController {
    protected service: DataObjectService<SymbolicSpace<AbsolutePosition>>;

    constructor() {
        this.service = new DataObjectService(new MemoryDataService(SymbolicSpace));
    }

    /**
     * Initialize the buildings
     *
     * @returns {Promise<void>} Promise of initialisation
     */
    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.service
                .emitAsync('build')
                .then(() => {
                    return Promise.all(
                        Object.keys(Spaces).map((key) => {
                            const space = (Spaces as any)[key] as SymbolicSpace<AbsolutePosition>;
                            return this.service.insertObject(space);
                        }),
                    );
                })
                .then(() => {
                    resolve();
                })
                .catch(reject);
        });
    }

    /**
     * Find a building by its unique identifier
     *
     * @param {string} uid Building UID
     * @returns {Promise<SymbolicSpace<AbsolutePosition>>} Promise with a symbolic space if found
     */
    findByUID(uid: string): Promise<SymbolicSpace<AbsolutePosition>> {
        return this.service.findByUID(uid);
    }

    /**
     * Find a building by its uri
     *
     * @param {string} uri Building uri
     * @returns {Promise<SymbolicSpace<AbsolutePosition>>} Promise with a symbolic space if found
     */
    findByURI(uri: string): Promise<SymbolicSpace<AbsolutePosition>> {
        if (uri.startsWith(BASE_URI)) {
            const spaceUID = uri.replace(BASE_URI, '');
            return this.findByUID(spaceUID);
        }
        return Promise.reject(`Not a valid QR-code!`);
    }

    /**
     * Get the centroid of a space converted to geographical coordinates
     *
     * @param {SymbolicSpace<AbsolutePosition>} space Symbolic space
     * @returns {GeographicalPosition} geographical position
     */
    getGeographicalPosition(space: SymbolicSpace<AbsolutePosition>): GeographicalPosition {
        const position = space.toPosition();
        const convertedPosition = building.transform(position);
        convertedPosition.accuracy = position.accuracy;
        return convertedPosition as GeographicalPosition;
    }

    /**
     * Find all spaces
     *
     * @returns {Promise<SymbolicSpace<AbsolutePosition>[]>} Promise of an array of spaces
     */
    findAll(): Promise<SymbolicSpace<AbsolutePosition>[]> {
        return this.service.findAll();
    }
}
