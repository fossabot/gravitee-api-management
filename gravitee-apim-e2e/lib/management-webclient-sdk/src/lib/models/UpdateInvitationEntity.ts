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
import type { InvitationReferenceType } from './InvitationReferenceType';
import {
    InvitationReferenceTypeFromJSON,
    InvitationReferenceTypeFromJSONTyped,
    InvitationReferenceTypeToJSON,
} from './InvitationReferenceType';

/**
 * 
 * @export
 * @interface UpdateInvitationEntity
 */
export interface UpdateInvitationEntity {
    /**
     * 
     * @type {string}
     * @memberof UpdateInvitationEntity
     */
    api_role?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvitationEntity
     */
    application_role?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvitationEntity
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvitationEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateInvitationEntity
     */
    reference_id: string;
    /**
     * 
     * @type {InvitationReferenceType}
     * @memberof UpdateInvitationEntity
     */
    reference_type: InvitationReferenceType;
}

/**
 * Check if a given object implements the UpdateInvitationEntity interface.
 */
export function instanceOfUpdateInvitationEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "reference_id" in value;
    isInstance = isInstance && "reference_type" in value;

    return isInstance;
}

export function UpdateInvitationEntityFromJSON(json: any): UpdateInvitationEntity {
    return UpdateInvitationEntityFromJSONTyped(json, false);
}

export function UpdateInvitationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInvitationEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_role': !exists(json, 'api_role') ? undefined : json['api_role'],
        'application_role': !exists(json, 'application_role') ? undefined : json['application_role'],
        'email': json['email'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference_id': json['reference_id'],
        'reference_type': InvitationReferenceTypeFromJSON(json['reference_type']),
    };
}

export function UpdateInvitationEntityToJSON(value?: UpdateInvitationEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_role': value.api_role,
        'application_role': value.application_role,
        'email': value.email,
        'id': value.id,
        'reference_id': value.reference_id,
        'reference_type': InvitationReferenceTypeToJSON(value.reference_type),
    };
}

