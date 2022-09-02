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
import type { Flow } from './Flow';
import {
    FlowFromJSON,
    FlowFromJSONTyped,
    FlowToJSON,
} from './Flow';
import type { PlanSecurityType } from './PlanSecurityType';
import {
    PlanSecurityTypeFromJSON,
    PlanSecurityTypeFromJSONTyped,
    PlanSecurityTypeToJSON,
} from './PlanSecurityType';
import type { PlanStatus } from './PlanStatus';
import {
    PlanStatusFromJSON,
    PlanStatusFromJSONTyped,
    PlanStatusToJSON,
} from './PlanStatus';
import type { PlanType } from './PlanType';
import {
    PlanTypeFromJSON,
    PlanTypeFromJSONTyped,
    PlanTypeToJSON,
} from './PlanType';
import type { PlanValidationType } from './PlanValidationType';
import {
    PlanValidationTypeFromJSON,
    PlanValidationTypeFromJSONTyped,
    PlanValidationTypeToJSON,
} from './PlanValidationType';
import type { Rule } from './Rule';
import {
    RuleFromJSON,
    RuleFromJSONTyped,
    RuleToJSON,
} from './Rule';

/**
 * 
 * @export
 * @interface NewPlanEntity
 */
export interface NewPlanEntity {
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    api?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewPlanEntity
     */
    characteristics?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    comment_message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewPlanEntity
     */
    comment_required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    crossId?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    description: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewPlanEntity
     */
    excluded_groups?: Array<string>;
    /**
     * 
     * @type {Array<Flow>}
     * @memberof NewPlanEntity
     */
    flows: Array<Flow>;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    general_conditions?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof NewPlanEntity
     */
    order?: number;
    /**
     * 
     * @type {{ [key: string]: Array<Rule>; }}
     * @memberof NewPlanEntity
     */
    paths: { [key: string]: Array<Rule>; };
    /**
     * 
     * @type {PlanSecurityType}
     * @memberof NewPlanEntity
     */
    security: PlanSecurityType;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    securityDefinition?: string;
    /**
     * 
     * @type {string}
     * @memberof NewPlanEntity
     */
    selection_rule?: string;
    /**
     * 
     * @type {PlanStatus}
     * @memberof NewPlanEntity
     */
    status: PlanStatus;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewPlanEntity
     */
    tags?: Array<string>;
    /**
     * 
     * @type {PlanType}
     * @memberof NewPlanEntity
     */
    type: PlanType;
    /**
     * 
     * @type {PlanValidationType}
     * @memberof NewPlanEntity
     */
    validation: PlanValidationType;
}

/**
 * Check if a given object implements the NewPlanEntity interface.
 */
export function instanceOfNewPlanEntity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "flows" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "paths" in value;
    isInstance = isInstance && "security" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "validation" in value;

    return isInstance;
}

export function NewPlanEntityFromJSON(json: any): NewPlanEntity {
    return NewPlanEntityFromJSONTyped(json, false);
}

export function NewPlanEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewPlanEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'api': !exists(json, 'api') ? undefined : json['api'],
        'characteristics': !exists(json, 'characteristics') ? undefined : json['characteristics'],
        'comment_message': !exists(json, 'comment_message') ? undefined : json['comment_message'],
        'comment_required': !exists(json, 'comment_required') ? undefined : json['comment_required'],
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'description': json['description'],
        'excluded_groups': !exists(json, 'excluded_groups') ? undefined : json['excluded_groups'],
        'flows': ((json['flows'] as Array<any>).map(FlowFromJSON)),
        'general_conditions': !exists(json, 'general_conditions') ? undefined : json['general_conditions'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'paths': json['paths'],
        'security': PlanSecurityTypeFromJSON(json['security']),
        'securityDefinition': !exists(json, 'securityDefinition') ? undefined : json['securityDefinition'],
        'selection_rule': !exists(json, 'selection_rule') ? undefined : json['selection_rule'],
        'status': PlanStatusFromJSON(json['status']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'type': PlanTypeFromJSON(json['type']),
        'validation': PlanValidationTypeFromJSON(json['validation']),
    };
}

export function NewPlanEntityToJSON(value?: NewPlanEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'api': value.api,
        'characteristics': value.characteristics,
        'comment_message': value.comment_message,
        'comment_required': value.comment_required,
        'crossId': value.crossId,
        'description': value.description,
        'excluded_groups': value.excluded_groups,
        'flows': ((value.flows as Array<any>).map(FlowToJSON)),
        'general_conditions': value.general_conditions,
        'id': value.id,
        'name': value.name,
        'order': value.order,
        'paths': value.paths,
        'security': PlanSecurityTypeToJSON(value.security),
        'securityDefinition': value.securityDefinition,
        'selection_rule': value.selection_rule,
        'status': PlanStatusToJSON(value.status),
        'tags': value.tags,
        'type': PlanTypeToJSON(value.type),
        'validation': PlanValidationTypeToJSON(value.validation),
    };
}

