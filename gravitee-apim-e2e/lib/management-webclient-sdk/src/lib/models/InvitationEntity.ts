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
 * @interface InvitationEntity
 */
export interface InvitationEntity {
    /**
     * 
     * @type {string}
     * @memberof InvitationEntity
     */
    api_role?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationEntity
     */
    application_role?: string;
    /**
     * 
     * @type {Date}
     * @memberof InvitationEntity
     */
    created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof InvitationEntity
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationEntity
     */
    reference_id?: string;
    /**
     * 
     * @type {InvitationReferenceType}
     * @memberof InvitationEntity
     */
    reference_type?: InvitationReferenceType;
    /**
     * 
     * @type {Date}
     * @memberof InvitationEntity
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the InvitationEntity interface.
 */
export function instanceOfInvitationEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InvitationEntityFromJSON(json: any): InvitationEntity {
    return InvitationEntityFromJSONTyped(json, false);
}

export function InvitationEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api_role': !exists(json, 'api_role') ? undefined : json['api_role'],
        'application_role': !exists(json, 'application_role') ? undefined : json['application_role'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference_id': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'reference_type': !exists(json, 'reference_type') ? undefined : InvitationReferenceTypeFromJSON(json['reference_type']),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function InvitationEntityToJSON(value?: InvitationEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api_role': value.api_role,
        'application_role': value.application_role,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'email': value.email,
        'id': value.id,
        'reference_id': value.reference_id,
        'reference_type': InvitationReferenceTypeToJSON(value.reference_type),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}

