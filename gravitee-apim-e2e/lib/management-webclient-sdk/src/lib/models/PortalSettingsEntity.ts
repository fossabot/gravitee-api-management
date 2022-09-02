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
import type { Analytics } from './Analytics';
import {
    AnalyticsFromJSON,
    AnalyticsFromJSONTyped,
    AnalyticsToJSON,
} from './Analytics';
import type { Api } from './Api';
import {
    ApiFromJSON,
    ApiFromJSONTyped,
    ApiToJSON,
} from './Api';
import type { ApiQualityMetrics } from './ApiQualityMetrics';
import {
    ApiQualityMetricsFromJSON,
    ApiQualityMetricsFromJSONTyped,
    ApiQualityMetricsToJSON,
} from './ApiQualityMetrics';
import type { ApiReview } from './ApiReview';
import {
    ApiReviewFromJSON,
    ApiReviewFromJSONTyped,
    ApiReviewToJSON,
} from './ApiReview';
import type { Company } from './Company';
import {
    CompanyFromJSON,
    CompanyFromJSONTyped,
    CompanyToJSON,
} from './Company';
import type { ConsoleSettingsEntityMetadata } from './ConsoleSettingsEntityMetadata';
import {
    ConsoleSettingsEntityMetadataFromJSON,
    ConsoleSettingsEntityMetadataFromJSONTyped,
    ConsoleSettingsEntityMetadataToJSON,
} from './ConsoleSettingsEntityMetadata';
import type { Dashboards } from './Dashboards';
import {
    DashboardsFromJSON,
    DashboardsFromJSONTyped,
    DashboardsToJSON,
} from './Dashboards';
import type { Documentation } from './Documentation';
import {
    DocumentationFromJSON,
    DocumentationFromJSONTyped,
    DocumentationToJSON,
} from './Documentation';
import type { Email } from './Email';
import {
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';
import type { OpenAPIDocViewer } from './OpenAPIDocViewer';
import {
    OpenAPIDocViewerFromJSON,
    OpenAPIDocViewerFromJSONTyped,
    OpenAPIDocViewerToJSON,
} from './OpenAPIDocViewer';
import type { PlanSettings } from './PlanSettings';
import {
    PlanSettingsFromJSON,
    PlanSettingsFromJSONTyped,
    PlanSettingsToJSON,
} from './PlanSettings';
import type { Portal } from './Portal';
import {
    PortalFromJSON,
    PortalFromJSONTyped,
    PortalToJSON,
} from './Portal';
import type { PortalApplicationSettings } from './PortalApplicationSettings';
import {
    PortalApplicationSettingsFromJSON,
    PortalApplicationSettingsFromJSONTyped,
    PortalApplicationSettingsToJSON,
} from './PortalApplicationSettings';
import type { PortalAuthentication } from './PortalAuthentication';
import {
    PortalAuthenticationFromJSON,
    PortalAuthenticationFromJSONTyped,
    PortalAuthenticationToJSON,
} from './PortalAuthentication';
import type { PortalCors } from './PortalCors';
import {
    PortalCorsFromJSON,
    PortalCorsFromJSONTyped,
    PortalCorsToJSON,
} from './PortalCors';
import type { PortalReCaptcha } from './PortalReCaptcha';
import {
    PortalReCaptchaFromJSON,
    PortalReCaptchaFromJSONTyped,
    PortalReCaptchaToJSON,
} from './PortalReCaptcha';
import type { PortalScheduler } from './PortalScheduler';
import {
    PortalSchedulerFromJSON,
    PortalSchedulerFromJSONTyped,
    PortalSchedulerToJSON,
} from './PortalScheduler';

/**
 * 
 * @export
 * @interface PortalSettingsEntity
 */
export interface PortalSettingsEntity {
    /**
     * 
     * @type {Analytics}
     * @memberof PortalSettingsEntity
     */
    analytics?: Analytics;
    /**
     * 
     * @type {Api}
     * @memberof PortalSettingsEntity
     */
    api?: Api;
    /**
     * 
     * @type {ApiQualityMetrics}
     * @memberof PortalSettingsEntity
     */
    apiQualityMetrics?: ApiQualityMetrics;
    /**
     * 
     * @type {ApiReview}
     * @memberof PortalSettingsEntity
     */
    apiReview?: ApiReview;
    /**
     * 
     * @type {PortalApplicationSettings}
     * @memberof PortalSettingsEntity
     */
    application?: PortalApplicationSettings;
    /**
     * 
     * @type {PortalAuthentication}
     * @memberof PortalSettingsEntity
     */
    authentication?: PortalAuthentication;
    /**
     * 
     * @type {Company}
     * @memberof PortalSettingsEntity
     */
    company?: Company;
    /**
     * 
     * @type {PortalCors}
     * @memberof PortalSettingsEntity
     */
    cors?: PortalCors;
    /**
     * 
     * @type {Dashboards}
     * @memberof PortalSettingsEntity
     */
    dashboards?: Dashboards;
    /**
     * 
     * @type {Documentation}
     * @memberof PortalSettingsEntity
     */
    documentation?: Documentation;
    /**
     * 
     * @type {Email}
     * @memberof PortalSettingsEntity
     */
    email?: Email;
    /**
     * 
     * @type {ConsoleSettingsEntityMetadata}
     * @memberof PortalSettingsEntity
     */
    metadata?: ConsoleSettingsEntityMetadata;
    /**
     * 
     * @type {OpenAPIDocViewer}
     * @memberof PortalSettingsEntity
     */
    openAPIDocViewer?: OpenAPIDocViewer;
    /**
     * 
     * @type {PlanSettings}
     * @memberof PortalSettingsEntity
     */
    plan?: PlanSettings;
    /**
     * 
     * @type {Portal}
     * @memberof PortalSettingsEntity
     */
    portal?: Portal;
    /**
     * 
     * @type {PortalReCaptcha}
     * @memberof PortalSettingsEntity
     */
    reCaptcha?: PortalReCaptcha;
    /**
     * 
     * @type {PortalScheduler}
     * @memberof PortalSettingsEntity
     */
    scheduler?: PortalScheduler;
}

/**
 * Check if a given object implements the PortalSettingsEntity interface.
 */
export function instanceOfPortalSettingsEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PortalSettingsEntityFromJSON(json: any): PortalSettingsEntity {
    return PortalSettingsEntityFromJSONTyped(json, false);
}

export function PortalSettingsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalSettingsEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'analytics': !exists(json, 'analytics') ? undefined : AnalyticsFromJSON(json['analytics']),
        'api': !exists(json, 'api') ? undefined : ApiFromJSON(json['api']),
        'apiQualityMetrics': !exists(json, 'apiQualityMetrics') ? undefined : ApiQualityMetricsFromJSON(json['apiQualityMetrics']),
        'apiReview': !exists(json, 'apiReview') ? undefined : ApiReviewFromJSON(json['apiReview']),
        'application': !exists(json, 'application') ? undefined : PortalApplicationSettingsFromJSON(json['application']),
        'authentication': !exists(json, 'authentication') ? undefined : PortalAuthenticationFromJSON(json['authentication']),
        'company': !exists(json, 'company') ? undefined : CompanyFromJSON(json['company']),
        'cors': !exists(json, 'cors') ? undefined : PortalCorsFromJSON(json['cors']),
        'dashboards': !exists(json, 'dashboards') ? undefined : DashboardsFromJSON(json['dashboards']),
        'documentation': !exists(json, 'documentation') ? undefined : DocumentationFromJSON(json['documentation']),
        'email': !exists(json, 'email') ? undefined : EmailFromJSON(json['email']),
        'metadata': !exists(json, 'metadata') ? undefined : ConsoleSettingsEntityMetadataFromJSON(json['metadata']),
        'openAPIDocViewer': !exists(json, 'openAPIDocViewer') ? undefined : OpenAPIDocViewerFromJSON(json['openAPIDocViewer']),
        'plan': !exists(json, 'plan') ? undefined : PlanSettingsFromJSON(json['plan']),
        'portal': !exists(json, 'portal') ? undefined : PortalFromJSON(json['portal']),
        'reCaptcha': !exists(json, 'reCaptcha') ? undefined : PortalReCaptchaFromJSON(json['reCaptcha']),
        'scheduler': !exists(json, 'scheduler') ? undefined : PortalSchedulerFromJSON(json['scheduler']),
    };
}

export function PortalSettingsEntityToJSON(value?: PortalSettingsEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'analytics': AnalyticsToJSON(value.analytics),
        'api': ApiToJSON(value.api),
        'apiQualityMetrics': ApiQualityMetricsToJSON(value.apiQualityMetrics),
        'apiReview': ApiReviewToJSON(value.apiReview),
        'application': PortalApplicationSettingsToJSON(value.application),
        'authentication': PortalAuthenticationToJSON(value.authentication),
        'company': CompanyToJSON(value.company),
        'cors': PortalCorsToJSON(value.cors),
        'dashboards': DashboardsToJSON(value.dashboards),
        'documentation': DocumentationToJSON(value.documentation),
        'email': EmailToJSON(value.email),
        'metadata': ConsoleSettingsEntityMetadataToJSON(value.metadata),
        'openAPIDocViewer': OpenAPIDocViewerToJSON(value.openAPIDocViewer),
        'plan': PlanSettingsToJSON(value.plan),
        'portal': PortalToJSON(value.portal),
        'reCaptcha': PortalReCaptchaToJSON(value.reCaptcha),
        'scheduler': PortalSchedulerToJSON(value.scheduler),
    };
}

