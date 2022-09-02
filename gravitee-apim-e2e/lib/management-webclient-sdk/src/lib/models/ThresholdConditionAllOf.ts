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
 * @interface ThresholdConditionAllOf
 */
export interface ThresholdConditionAllOf {
    /**
     * 
     * @type {string}
     * @memberof ThresholdConditionAllOf
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdConditionAllOf
     */
    operator?: ThresholdConditionAllOfOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof ThresholdConditionAllOf
     */
    threshold?: number;
}


/**
 * @export
 */
export const ThresholdConditionAllOfOperatorEnum = {
    LT: 'LT',
    LTE: 'LTE',
    GTE: 'GTE',
    GT: 'GT'
} as const;
export type ThresholdConditionAllOfOperatorEnum = typeof ThresholdConditionAllOfOperatorEnum[keyof typeof ThresholdConditionAllOfOperatorEnum];


/**
 * Check if a given object implements the ThresholdConditionAllOf interface.
 */
export function instanceOfThresholdConditionAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThresholdConditionAllOfFromJSON(json: any): ThresholdConditionAllOf {
    return ThresholdConditionAllOfFromJSONTyped(json, false);
}

export function ThresholdConditionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThresholdConditionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'threshold': !exists(json, 'threshold') ? undefined : json['threshold'],
    };
}

export function ThresholdConditionAllOfToJSON(value?: ThresholdConditionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': value.property,
        'operator': value.operator,
        'threshold': value.threshold,
    };
}

