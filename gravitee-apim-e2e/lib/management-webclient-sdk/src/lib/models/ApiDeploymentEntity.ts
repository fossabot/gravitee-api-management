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
 * @interface ApiDeploymentEntity
 */
export interface ApiDeploymentEntity {
    /**
     * Label for an Api deployment. Duplicate names can exists.
     * @type {string}
     * @memberof ApiDeploymentEntity
     */
    deploymentLabel?: string;
}

/**
 * Check if a given object implements the ApiDeploymentEntity interface.
 */
export function instanceOfApiDeploymentEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiDeploymentEntityFromJSON(json: any): ApiDeploymentEntity {
    return ApiDeploymentEntityFromJSONTyped(json, false);
}

export function ApiDeploymentEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiDeploymentEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deploymentLabel': !exists(json, 'deploymentLabel') ? undefined : json['deploymentLabel'],
    };
}

export function ApiDeploymentEntityToJSON(value?: ApiDeploymentEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deploymentLabel': value.deploymentLabel,
    };
}

