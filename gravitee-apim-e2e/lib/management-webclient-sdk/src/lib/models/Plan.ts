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
import type { PlanSecurityType } from './PlanSecurityType';
import {
    PlanSecurityTypeFromJSON,
    PlanSecurityTypeFromJSONTyped,
    PlanSecurityTypeToJSON,
} from './PlanSecurityType';

/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    name?: string;
    /**
     * 
     * @type {PlanSecurityType}
     * @memberof Plan
     */
    security?: PlanSecurityType;
}

/**
 * Check if a given object implements the Plan interface.
 */
export function instanceOfPlan(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlanFromJSON(json: any): Plan {
    return PlanFromJSONTyped(json, false);
}

export function PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'security': !exists(json, 'security') ? undefined : PlanSecurityTypeFromJSON(json['security']),
    };
}

export function PlanToJSON(value?: Plan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'security': PlanSecurityTypeToJSON(value.security),
    };
}

