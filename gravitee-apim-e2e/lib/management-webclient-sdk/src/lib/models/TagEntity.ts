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
 * @interface TagEntity
 */
export interface TagEntity {
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TagEntity
     */
    restricted_groups?: Array<string>;
}

/**
 * Check if a given object implements the TagEntity interface.
 */
export function instanceOfTagEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TagEntityFromJSON(json: any): TagEntity {
    return TagEntityFromJSONTyped(json, false);
}

export function TagEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'restricted_groups': !exists(json, 'restricted_groups') ? undefined : json['restricted_groups'],
    };
}

export function TagEntityToJSON(value?: TagEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'id': value.id,
        'name': value.name,
        'restricted_groups': value.restricted_groups,
    };
}

