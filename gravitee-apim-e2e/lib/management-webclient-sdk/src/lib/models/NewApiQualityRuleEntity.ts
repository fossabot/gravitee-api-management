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
 * @interface NewApiQualityRuleEntity
 */
export interface NewApiQualityRuleEntity {
    /**
     * 
     * @type {string}
     * @memberof NewApiQualityRuleEntity
     */
    api?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewApiQualityRuleEntity
     */
    checked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewApiQualityRuleEntity
     */
    quality_rule?: string;
}

/**
 * Check if a given object implements the NewApiQualityRuleEntity interface.
 */
export function instanceOfNewApiQualityRuleEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewApiQualityRuleEntityFromJSON(json: any): NewApiQualityRuleEntity {
    return NewApiQualityRuleEntityFromJSONTyped(json, false);
}

export function NewApiQualityRuleEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewApiQualityRuleEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api': !exists(json, 'api') ? undefined : json['api'],
        'checked': !exists(json, 'checked') ? undefined : json['checked'],
        'quality_rule': !exists(json, 'quality_rule') ? undefined : json['quality_rule'],
    };
}

export function NewApiQualityRuleEntityToJSON(value?: NewApiQualityRuleEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api': value.api,
        'checked': value.checked,
        'quality_rule': value.quality_rule,
    };
}

