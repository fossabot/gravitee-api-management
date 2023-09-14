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
 * @interface PortalConfigEntity
 */
export interface PortalConfigEntity {
    /**
     * 
     * @type {Analytics}
     * @memberof PortalConfigEntity
     */
    analytics?: Analytics;
    /**
     * 
     * @type {Api}
     * @memberof PortalConfigEntity
     */
    api?: Api;
    /**
     * 
     * @type {ApiQualityMetrics}
     * @memberof PortalConfigEntity
     */
    apiQualityMetrics?: ApiQualityMetrics;
    /**
     * 
     * @type {ApiReview}
     * @memberof PortalConfigEntity
     */
    apiReview?: ApiReview;
    /**
     * 
     * @type {PortalApplicationSettings}
     * @memberof PortalConfigEntity
     */
    application?: PortalApplicationSettings;
    /**
     * 
     * @type {PortalAuthentication}
     * @memberof PortalConfigEntity
     */
    authentication?: PortalAuthentication;
    /**
     * 
     * @type {Company}
     * @memberof PortalConfigEntity
     */
    company?: Company;
    /**
     * 
     * @type {Dashboards}
     * @memberof PortalConfigEntity
     */
    dashboards?: Dashboards;
    /**
     * 
     * @type {Documentation}
     * @memberof PortalConfigEntity
     */
    documentation?: Documentation;
    /**
     * 
     * @type {OpenAPIDocViewer}
     * @memberof PortalConfigEntity
     */
    openAPIDocViewer?: OpenAPIDocViewer;
    /**
     * 
     * @type {PlanSettings}
     * @memberof PortalConfigEntity
     */
    plan?: PlanSettings;
    /**
     * 
     * @type {Portal}
     * @memberof PortalConfigEntity
     */
    portal?: Portal;
    /**
     * 
     * @type {PortalReCaptcha}
     * @memberof PortalConfigEntity
     */
    reCaptcha?: PortalReCaptcha;
    /**
     * 
     * @type {PortalScheduler}
     * @memberof PortalConfigEntity
     */
    scheduler?: PortalScheduler;
}

/**
 * Check if a given object implements the PortalConfigEntity interface.
 */
export function instanceOfPortalConfigEntity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PortalConfigEntityFromJSON(json: any): PortalConfigEntity {
    return PortalConfigEntityFromJSONTyped(json, false);
}

export function PortalConfigEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortalConfigEntity {
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
        'dashboards': !exists(json, 'dashboards') ? undefined : DashboardsFromJSON(json['dashboards']),
        'documentation': !exists(json, 'documentation') ? undefined : DocumentationFromJSON(json['documentation']),
        'openAPIDocViewer': !exists(json, 'openAPIDocViewer') ? undefined : OpenAPIDocViewerFromJSON(json['openAPIDocViewer']),
        'plan': !exists(json, 'plan') ? undefined : PlanSettingsFromJSON(json['plan']),
        'portal': !exists(json, 'portal') ? undefined : PortalFromJSON(json['portal']),
        'reCaptcha': !exists(json, 'reCaptcha') ? undefined : PortalReCaptchaFromJSON(json['reCaptcha']),
        'scheduler': !exists(json, 'scheduler') ? undefined : PortalSchedulerFromJSON(json['scheduler']),
    };
}

export function PortalConfigEntityToJSON(value?: PortalConfigEntity | null): any {
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
        'dashboards': DashboardsToJSON(value.dashboards),
        'documentation': DocumentationToJSON(value.documentation),
        'openAPIDocViewer': OpenAPIDocViewerToJSON(value.openAPIDocViewer),
        'plan': PlanSettingsToJSON(value.plan),
        'portal': PortalToJSON(value.portal),
        'reCaptcha': PortalReCaptchaToJSON(value.reCaptcha),
        'scheduler': PortalSchedulerToJSON(value.scheduler),
    };
}
