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
import type { AccessControlEntity } from './AccessControlEntity';
import {
    AccessControlEntityFromJSON,
    AccessControlEntityFromJSONTyped,
    AccessControlEntityToJSON,
} from './AccessControlEntity';
import type { PageMediaEntity } from './PageMediaEntity';
import {
    PageMediaEntityFromJSON,
    PageMediaEntityFromJSONTyped,
    PageMediaEntityToJSON,
} from './PageMediaEntity';
import type { PageRevisionId } from './PageRevisionId';
import {
    PageRevisionIdFromJSON,
    PageRevisionIdFromJSONTyped,
    PageRevisionIdToJSON,
} from './PageRevisionId';
import type { PageSourceEntity } from './PageSourceEntity';
import {
    PageSourceEntityFromJSON,
    PageSourceEntityFromJSONTyped,
    PageSourceEntityToJSON,
} from './PageSourceEntity';
import type { Visibility } from './Visibility';
import {
    VisibilityFromJSON,
    VisibilityFromJSONTyped,
    VisibilityToJSON,
} from './Visibility';

/**
 * 
 * @export
 * @interface PageEntity
 */
export interface PageEntity {
    /**
     * 
     * @type {Array<AccessControlEntity>}
     * @memberof PageEntity
     */
    accessControls?: Array<AccessControlEntity>;
    /**
     * 
     * @type {Array<PageMediaEntity>}
     * @memberof PageEntity
     */
    attached_media?: Array<PageMediaEntity>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PageEntity
     */
    configuration?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    content?: string;
    /**
     * 
     * @type {PageRevisionId}
     * @memberof PageEntity
     */
    contentRevisionId?: PageRevisionId;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    contentType?: string;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    crossId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PageEntity
     */
    excludedAccessControls?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PageEntity
     */
    excluded_groups?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof PageEntity
     */
    readonly generalConditions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageEntity
     */
    homepage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    lastContributor?: string;
    /**
     * 
     * @type {Date}
     * @memberof PageEntity
     */
    lastModificationDate?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof PageEntity
     */
    messages?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PageEntity
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PageEntity
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    parentPath?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PageEntity
     */
    published?: boolean;
    /**
     * 
     * @type {PageSourceEntity}
     * @memberof PageEntity
     */
    source?: PageSourceEntity;
    /**
     * 
     * @type {Array<PageEntity>}
     * @memberof PageEntity
     */
    translations?: Array<PageEntity>;
    /**
     * 
     * @type {string}
     * @memberof PageEntity
     */
    type?: string;
    /**
     * 
     * @type {Visibility}
     * @memberof PageEntity
     */
    visibility?: Visibility;
}

/**
 * Check if a given object implements the PageEntity interface.
 */
export function instanceOfPageEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageEntityFromJSON(json: any): PageEntity {
    return PageEntityFromJSONTyped(json, false);
}

export function PageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessControls': !exists(json, 'accessControls') ? undefined : ((json['accessControls'] as Array<any>).map(AccessControlEntityFromJSON)),
        'attached_media': !exists(json, 'attached_media') ? undefined : ((json['attached_media'] as Array<any>).map(PageMediaEntityFromJSON)),
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'contentRevisionId': !exists(json, 'contentRevisionId') ? undefined : PageRevisionIdFromJSON(json['contentRevisionId']),
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'excludedAccessControls': !exists(json, 'excludedAccessControls') ? undefined : json['excludedAccessControls'],
        'excluded_groups': !exists(json, 'excluded_groups') ? undefined : json['excluded_groups'],
        'generalConditions': !exists(json, 'generalConditions') ? undefined : json['generalConditions'],
        'homepage': !exists(json, 'homepage') ? undefined : json['homepage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastContributor': !exists(json, 'lastContributor') ? undefined : json['lastContributor'],
        'lastModificationDate': !exists(json, 'lastModificationDate') ? undefined : (new Date(json['lastModificationDate'])),
        'messages': !exists(json, 'messages') ? undefined : json['messages'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'parentPath': !exists(json, 'parentPath') ? undefined : json['parentPath'],
        'published': !exists(json, 'published') ? undefined : json['published'],
        'source': !exists(json, 'source') ? undefined : PageSourceEntityFromJSON(json['source']),
        'translations': !exists(json, 'translations') ? undefined : ((json['translations'] as Array<any>).map(PageEntityFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'visibility': !exists(json, 'visibility') ? undefined : VisibilityFromJSON(json['visibility']),
    };
}

export function PageEntityToJSON(value?: PageEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessControls': value.accessControls === undefined ? undefined : ((value.accessControls as Array<any>).map(AccessControlEntityToJSON)),
        'attached_media': value.attached_media === undefined ? undefined : ((value.attached_media as Array<any>).map(PageMediaEntityToJSON)),
        'configuration': value.configuration,
        'content': value.content,
        'contentRevisionId': PageRevisionIdToJSON(value.contentRevisionId),
        'contentType': value.contentType,
        'crossId': value.crossId,
        'excludedAccessControls': value.excludedAccessControls,
        'excluded_groups': value.excluded_groups,
        'homepage': value.homepage,
        'id': value.id,
        'lastContributor': value.lastContributor,
        'lastModificationDate': value.lastModificationDate === undefined ? undefined : (value.lastModificationDate.toISOString()),
        'messages': value.messages,
        'metadata': value.metadata,
        'name': value.name,
        'order': value.order,
        'parentId': value.parentId,
        'parentPath': value.parentPath,
        'published': value.published,
        'source': PageSourceEntityToJSON(value.source),
        'translations': value.translations === undefined ? undefined : ((value.translations as Array<any>).map(PageEntityToJSON)),
        'type': value.type,
        'visibility': VisibilityToJSON(value.visibility),
    };
}

