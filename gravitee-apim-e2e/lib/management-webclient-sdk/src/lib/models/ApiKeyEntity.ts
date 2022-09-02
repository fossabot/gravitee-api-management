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
import type { ApplicationEntity } from './ApplicationEntity';
import {
    ApplicationEntityFromJSON,
    ApplicationEntityFromJSONTyped,
    ApplicationEntityToJSON,
} from './ApplicationEntity';
import type { SubscriptionEntity } from './SubscriptionEntity';
import {
    SubscriptionEntityFromJSON,
    SubscriptionEntityFromJSONTyped,
    SubscriptionEntityToJSON,
} from './SubscriptionEntity';

/**
 * 
 * @export
 * @interface ApiKeyEntity
 */
export interface ApiKeyEntity {
    /**
     * 
     * @type {ApplicationEntity}
     * @memberof ApiKeyEntity
     */
    application?: ApplicationEntity;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyEntity
     */
    created_at?: Date;
    /**
     * 
     * @type {number}
     * @memberof ApiKeyEntity
     */
    daysToExpirationOnLastNotification?: number;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyEntity
     */
    expire_at?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ApiKeyEntity
     */
    expired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiKeyEntity
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ApiKeyEntity
     */
    paused?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApiKeyEntity
     */
    revoked?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyEntity
     */
    revoked_at?: Date;
    /**
     * 
     * @type {Array<SubscriptionEntity>}
     * @memberof ApiKeyEntity
     */
    subscriptions?: Array<SubscriptionEntity>;
    /**
     * 
     * @type {Date}
     * @memberof ApiKeyEntity
     */
    updated_at?: Date;
}

/**
 * Check if a given object implements the ApiKeyEntity interface.
 */
export function instanceOfApiKeyEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiKeyEntityFromJSON(json: any): ApiKeyEntity {
    return ApiKeyEntityFromJSONTyped(json, false);
}

export function ApiKeyEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiKeyEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'application': !exists(json, 'application') ? undefined : ApplicationEntityFromJSON(json['application']),
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'daysToExpirationOnLastNotification': !exists(json, 'daysToExpirationOnLastNotification') ? undefined : json['daysToExpirationOnLastNotification'],
        'expire_at': !exists(json, 'expire_at') ? undefined : (new Date(json['expire_at'])),
        'expired': !exists(json, 'expired') ? undefined : json['expired'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'revoked': !exists(json, 'revoked') ? undefined : json['revoked'],
        'revoked_at': !exists(json, 'revoked_at') ? undefined : (new Date(json['revoked_at'])),
        'subscriptions': !exists(json, 'subscriptions') ? undefined : ((json['subscriptions'] as Array<any>).map(SubscriptionEntityFromJSON)),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ApiKeyEntityToJSON(value?: ApiKeyEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'application': ApplicationEntityToJSON(value.application),
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'daysToExpirationOnLastNotification': value.daysToExpirationOnLastNotification,
        'expire_at': value.expire_at === undefined ? undefined : (value.expire_at.toISOString()),
        'expired': value.expired,
        'id': value.id,
        'key': value.key,
        'paused': value.paused,
        'revoked': value.revoked,
        'revoked_at': value.revoked_at === undefined ? undefined : (value.revoked_at.toISOString()),
        'subscriptions': value.subscriptions === undefined ? undefined : ((value.subscriptions as Array<any>).map(SubscriptionEntityToJSON)),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}

