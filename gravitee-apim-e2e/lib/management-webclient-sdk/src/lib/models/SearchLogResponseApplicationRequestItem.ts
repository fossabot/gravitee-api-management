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
import type { ApplicationRequestItem } from './ApplicationRequestItem';
import {
    ApplicationRequestItemFromJSON,
    ApplicationRequestItemFromJSONTyped,
    ApplicationRequestItemToJSON,
} from './ApplicationRequestItem';

/**
 * 
 * @export
 * @interface SearchLogResponseApplicationRequestItem
 */
export interface SearchLogResponseApplicationRequestItem {
    /**
     * 
     * @type {Array<ApplicationRequestItem>}
     * @memberof SearchLogResponseApplicationRequestItem
     */
    logs?: Array<ApplicationRequestItem>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof SearchLogResponseApplicationRequestItem
     */
    metadata?: { [key: string]: { [key: string]: string; }; };
    /**
     * 
     * @type {number}
     * @memberof SearchLogResponseApplicationRequestItem
     */
    total?: number;
}

/**
 * Check if a given object implements the SearchLogResponseApplicationRequestItem interface.
 */
export function instanceOfSearchLogResponseApplicationRequestItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchLogResponseApplicationRequestItemFromJSON(json: any): SearchLogResponseApplicationRequestItem {
    return SearchLogResponseApplicationRequestItemFromJSONTyped(json, false);
}

export function SearchLogResponseApplicationRequestItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchLogResponseApplicationRequestItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': !exists(json, 'logs') ? undefined : ((json['logs'] as Array<any>).map(ApplicationRequestItemFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function SearchLogResponseApplicationRequestItemToJSON(value?: SearchLogResponseApplicationRequestItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': value.logs === undefined ? undefined : ((value.logs as Array<any>).map(ApplicationRequestItemToJSON)),
        'metadata': value.metadata,
        'total': value.total,
    };
}

