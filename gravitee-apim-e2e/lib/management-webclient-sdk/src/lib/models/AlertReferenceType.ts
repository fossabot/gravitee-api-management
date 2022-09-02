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
export const AlertReferenceType = {
    API: 'API',
    APPLICATION: 'APPLICATION',
    ENVIRONMENT: 'ENVIRONMENT'
} as const;
export type AlertReferenceType = typeof AlertReferenceType[keyof typeof AlertReferenceType];


export function AlertReferenceTypeFromJSON(json: any): AlertReferenceType {
    return AlertReferenceTypeFromJSONTyped(json, false);
}

export function AlertReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertReferenceType {
    return json as AlertReferenceType;
}

export function AlertReferenceTypeToJSON(value?: AlertReferenceType | null): any {
    return value as any;
}

