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
 * @interface Documentation
 */
export interface Documentation {
    /**
     * 
     * @type {string}
     * @memberof Documentation
     */
    url?: string;
}

/**
 * Check if a given object implements the Documentation interface.
 */
export function instanceOfDocumentation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocumentationFromJSON(json: any): Documentation {
    return DocumentationFromJSONTyped(json, false);
}

export function DocumentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Documentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function DocumentationToJSON(value?: Documentation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

