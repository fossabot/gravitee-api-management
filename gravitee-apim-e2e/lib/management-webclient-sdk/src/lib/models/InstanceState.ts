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
export const InstanceState = {
    STARTED: 'STARTED',
    UNKNOWN: 'UNKNOWN',
    STOPPED: 'STOPPED'
} as const;
export type InstanceState = typeof InstanceState[keyof typeof InstanceState];


export function InstanceStateFromJSON(json: any): InstanceState {
    return InstanceStateFromJSONTyped(json, false);
}

export function InstanceStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstanceState {
    return json as InstanceState;
}

export function InstanceStateToJSON(value?: InstanceState | null): any {
    return value as any;
}
