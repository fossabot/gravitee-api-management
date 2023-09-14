/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * Some news resources are in alpha version. This implies that they are likely to be modified or even removed in future versions. They are marked with the 🧪 symbol
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Maintenance
 */
export interface Maintenance {
    /**
     * 
     * @type {boolean}
     * @memberof Maintenance
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the Maintenance interface.
 */
export function instanceOfMaintenance(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MaintenanceFromJSON(json: any): Maintenance {
    return MaintenanceFromJSONTyped(json, false);
}

export function MaintenanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Maintenance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function MaintenanceToJSON(value?: Maintenance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}
