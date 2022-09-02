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


/**
 * 
 * @export
 */
export const PlanType = {
    API: 'API',
    CATALOG: 'CATALOG'
} as const;
export type PlanType = typeof PlanType[keyof typeof PlanType];


export function PlanTypeFromJSON(json: any): PlanType {
    return PlanTypeFromJSONTyped(json, false);
}

export function PlanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanType {
    return json as PlanType;
}

export function PlanTypeToJSON(value?: PlanType | null): any {
    return value as any;
}

