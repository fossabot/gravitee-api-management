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
 * @interface CompareConditionAllOf
 */
export interface CompareConditionAllOf {
    /**
     * 
     * @type {string}
     * @memberof CompareConditionAllOf
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof CompareConditionAllOf
     */
    operator?: CompareConditionAllOfOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof CompareConditionAllOf
     */
    multiplier?: number;
    /**
     * 
     * @type {string}
     * @memberof CompareConditionAllOf
     */
    property2?: string;
}


/**
 * @export
 */
export const CompareConditionAllOfOperatorEnum = {
    LT: 'LT',
    LTE: 'LTE',
    GTE: 'GTE',
    GT: 'GT'
} as const;
export type CompareConditionAllOfOperatorEnum = typeof CompareConditionAllOfOperatorEnum[keyof typeof CompareConditionAllOfOperatorEnum];


/**
 * Check if a given object implements the CompareConditionAllOf interface.
 */
export function instanceOfCompareConditionAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompareConditionAllOfFromJSON(json: any): CompareConditionAllOf {
    return CompareConditionAllOfFromJSONTyped(json, false);
}

export function CompareConditionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompareConditionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'multiplier': !exists(json, 'multiplier') ? undefined : json['multiplier'],
        'property2': !exists(json, 'property2') ? undefined : json['property2'],
    };
}

export function CompareConditionAllOfToJSON(value?: CompareConditionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': value.property,
        'operator': value.operator,
        'multiplier': value.multiplier,
        'property2': value.property2,
    };
}

