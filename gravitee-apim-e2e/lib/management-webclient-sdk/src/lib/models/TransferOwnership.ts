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
import type { MembershipMemberType } from './MembershipMemberType';
import {
    MembershipMemberTypeFromJSON,
    MembershipMemberTypeFromJSONTyped,
    MembershipMemberTypeToJSON,
} from './MembershipMemberType';

/**
 * 
 * @export
 * @interface TransferOwnership
 */
export interface TransferOwnership {
    /**
     * User's technical identifier.
     * @type {string}
     * @memberof TransferOwnership
     */
    id?: string;
    /**
     * User's reference for user providing from an identity provider.
     * @type {string}
     * @memberof TransferOwnership
     */
    reference?: string;
    /**
     * Role's name
     * @type {string}
     * @memberof TransferOwnership
     */
    role: string;
    /**
     * 
     * @type {MembershipMemberType}
     * @memberof TransferOwnership
     */
    type: MembershipMemberType;
}

/**
 * Check if a given object implements the TransferOwnership interface.
 */
export function instanceOfTransferOwnership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "role" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TransferOwnershipFromJSON(json: any): TransferOwnership {
    return TransferOwnershipFromJSONTyped(json, false);
}

export function TransferOwnershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferOwnership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'role': json['role'],
        'type': MembershipMemberTypeFromJSON(json['type']),
    };
}

export function TransferOwnershipToJSON(value?: TransferOwnership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'reference': value.reference,
        'role': value.role,
        'type': MembershipMemberTypeToJSON(value.type),
    };
}

