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
 * @interface AggregationConditionAllOf
 */
export interface AggregationConditionAllOf {
    /**
     * 
     * @type {string}
     * @memberof AggregationConditionAllOf
     */
    _function?: AggregationConditionAllOfFunctionEnum;
    /**
     * 
     * @type {string}
     * @memberof AggregationConditionAllOf
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof AggregationConditionAllOf
     */
    operator?: AggregationConditionAllOfOperatorEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregationConditionAllOf
     */
    threshold?: number;
    /**
     * 
     * @type {string}
     * @memberof AggregationConditionAllOf
     */
    timeUnit?: AggregationConditionAllOfTimeUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof AggregationConditionAllOf
     */
    duration?: number;
}


/**
 * @export
 */
export const AggregationConditionAllOfFunctionEnum = {
    COUNT: 'COUNT',
    AVG: 'AVG',
    MIN: 'MIN',
    MAX: 'MAX',
    P50: 'P50',
    P90: 'P90',
    P95: 'P95',
    P99: 'P99'
} as const;
export type AggregationConditionAllOfFunctionEnum = typeof AggregationConditionAllOfFunctionEnum[keyof typeof AggregationConditionAllOfFunctionEnum];

/**
 * @export
 */
export const AggregationConditionAllOfOperatorEnum = {
    LT: 'LT',
    LTE: 'LTE',
    GTE: 'GTE',
    GT: 'GT'
} as const;
export type AggregationConditionAllOfOperatorEnum = typeof AggregationConditionAllOfOperatorEnum[keyof typeof AggregationConditionAllOfOperatorEnum];

/**
 * @export
 */
export const AggregationConditionAllOfTimeUnitEnum = {
    NANOSECONDS: 'NANOSECONDS',
    MICROSECONDS: 'MICROSECONDS',
    MILLISECONDS: 'MILLISECONDS',
    SECONDS: 'SECONDS',
    MINUTES: 'MINUTES',
    HOURS: 'HOURS',
    DAYS: 'DAYS'
} as const;
export type AggregationConditionAllOfTimeUnitEnum = typeof AggregationConditionAllOfTimeUnitEnum[keyof typeof AggregationConditionAllOfTimeUnitEnum];


/**
 * Check if a given object implements the AggregationConditionAllOf interface.
 */
export function instanceOfAggregationConditionAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AggregationConditionAllOfFromJSON(json: any): AggregationConditionAllOf {
    return AggregationConditionAllOfFromJSONTyped(json, false);
}

export function AggregationConditionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregationConditionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_function': !exists(json, 'function') ? undefined : json['function'],
        'property': !exists(json, 'property') ? undefined : json['property'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'threshold': !exists(json, 'threshold') ? undefined : json['threshold'],
        'timeUnit': !exists(json, 'timeUnit') ? undefined : json['timeUnit'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
    };
}

export function AggregationConditionAllOfToJSON(value?: AggregationConditionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'function': value._function,
        'property': value.property,
        'operator': value.operator,
        'threshold': value.threshold,
        'timeUnit': value.timeUnit,
        'duration': value.duration,
    };
}

