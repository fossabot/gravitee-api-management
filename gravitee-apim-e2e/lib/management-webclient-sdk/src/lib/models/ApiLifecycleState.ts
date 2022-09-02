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
export const ApiLifecycleState = {
    CREATED: 'CREATED',
    PUBLISHED: 'PUBLISHED',
    UNPUBLISHED: 'UNPUBLISHED',
    DEPRECATED: 'DEPRECATED',
    ARCHIVED: 'ARCHIVED'
} as const;
export type ApiLifecycleState = typeof ApiLifecycleState[keyof typeof ApiLifecycleState];


export function ApiLifecycleStateFromJSON(json: any): ApiLifecycleState {
    return ApiLifecycleStateFromJSONTyped(json, false);
}

export function ApiLifecycleStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiLifecycleState {
    return json as ApiLifecycleState;
}

export function ApiLifecycleStateToJSON(value?: ApiLifecycleState | null): any {
    return value as any;
}

