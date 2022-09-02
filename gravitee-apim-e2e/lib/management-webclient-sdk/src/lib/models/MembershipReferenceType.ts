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
export const MembershipReferenceType = {
    APPLICATION: 'APPLICATION',
    API: 'API',
    GROUP: 'GROUP',
    ENVIRONMENT: 'ENVIRONMENT',
    ORGANIZATION: 'ORGANIZATION',
    PLATFORM: 'PLATFORM'
} as const;
export type MembershipReferenceType = typeof MembershipReferenceType[keyof typeof MembershipReferenceType];


export function MembershipReferenceTypeFromJSON(json: any): MembershipReferenceType {
    return MembershipReferenceTypeFromJSONTyped(json, false);
}

export function MembershipReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipReferenceType {
    return json as MembershipReferenceType;
}

export function MembershipReferenceTypeToJSON(value?: MembershipReferenceType | null): any {
    return value as any;
}

