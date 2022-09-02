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
 * @interface ApiQualityMetricsEntity
 */
export interface ApiQualityMetricsEntity {
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof ApiQualityMetricsEntity
     */
    metrics_passed?: { [key: string]: boolean; };
    /**
     * 
     * @type {number}
     * @memberof ApiQualityMetricsEntity
     */
    score?: number;
}

/**
 * Check if a given object implements the ApiQualityMetricsEntity interface.
 */
export function instanceOfApiQualityMetricsEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiQualityMetricsEntityFromJSON(json: any): ApiQualityMetricsEntity {
    return ApiQualityMetricsEntityFromJSONTyped(json, false);
}

export function ApiQualityMetricsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiQualityMetricsEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metrics_passed': !exists(json, 'metrics_passed') ? undefined : json['metrics_passed'],
        'score': !exists(json, 'score') ? undefined : json['score'],
    };
}

export function ApiQualityMetricsEntityToJSON(value?: ApiQualityMetricsEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metrics_passed': value.metrics_passed,
        'score': value.score,
    };
}

