import { AbsolutePosition, DataObjectService, MemoryDataService } from "@openhps/core";
import { SymbolicSpace } from "@openhps/geospatial";
import { Spaces, BASE_URI } from '../models';

/**
 * Building controller
 */
export class BuildingController {
    protected service: DataObjectService<SymbolicSpace<AbsolutePosition>>;

    constructor() {
        this.service = new DataObjectService(new MemoryDataService(SymbolicSpace));
    }

    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.service.emitAsync('build').then(() => {
                return Promise.all(Object.keys(Spaces).map(key => {
                    const space = (Spaces as any)[key] as SymbolicSpace<AbsolutePosition>;
                    return this.service.insertObject(space);
                }));
            }).then(() => {
                resolve();
            }).catch(reject);
        })
    }

    /**
     * Find a building by its unique identifier
     *
     * @param {string} uid Building UID 
     * @returns 
     */
    findByUID(uid: string): Promise<SymbolicSpace<AbsolutePosition>> {
        return this.service.findByUID(uid);
    }

    findByURI(uri: string): Promise<SymbolicSpace<AbsolutePosition>> {
        if (uri.startsWith(BASE_URI)) {
            const spaceUID = uri.replace(BASE_URI, "");
            return this.findByUID(spaceUID);
        }
        return Promise.reject(`Not a valid QR-code!`);
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
