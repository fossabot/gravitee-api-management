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


import * as runtime from '../runtime';
import type {
  ApiKeyEntity,
  ApplicationEntity,
  NewSubscriptionEntity,
  Subscription,
  SubscriptionEntityPageResult,
  SubscriptionStatus,
} from '../models';
import {
    ApiKeyEntityFromJSON,
    ApiKeyEntityToJSON,
    ApplicationEntityFromJSON,
    ApplicationEntityToJSON,
    NewSubscriptionEntityFromJSON,
    NewSubscriptionEntityToJSON,
    SubscriptionFromJSON,
    SubscriptionToJSON,
    SubscriptionEntityPageResultFromJSON,
    SubscriptionEntityPageResultToJSON,
    SubscriptionStatusFromJSON,
    SubscriptionStatusToJSON,
} from '../models';

export interface CloseApplicationSubscriptionRequest {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface CreateSubscriptionWithApplicationRequest {
    plan: string;
    application: string;
    envId: string;
    orgId: string;
    newSubscriptionEntity?: NewSubscriptionEntity;
}

export interface GetApiKeysForApplicationSubscriptionRequest {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApiSubscribedRequest {
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationSubscriptionRequest {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface GetApplicationSubscriptionsRequest {
    plan?: Array<string>;
    api?: Array<string>;
    status?: Array<SubscriptionStatus>;
    apiKey?: string;
    securityTypes?: Array<string>;
    size?: number;
    page?: number;
    expand?: Array<GetApplicationSubscriptionsExpandEnum>;
    application: string;
    envId: string;
    orgId: string;
}

export interface RenewApiKeyForApplicationSubscription1Request {
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

export interface RevokeApiKeyForApplicationSubscriptionRequest {
    apikey: string;
    subscription: string;
    application: string;
    envId: string;
    orgId: string;
}

/**
 * 
 */
export class ApplicationSubscriptionsApi extends runtime.BaseAPI {

    /**
     * User must have the APPLICATION_SUBSCRIPTION[DELETE] permission to use this service
     * Close the subscription
     */
    async closeApplicationSubscriptionRaw(requestParameters: CloseApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling closeApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling closeApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling closeApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling closeApplicationSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * User must have the APPLICATION_SUBSCRIPTION[DELETE] permission to use this service
     * Close the subscription
     */
    async closeApplicationSubscription(requestParameters: CloseApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.closeApplicationSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the MANAGE_SUBSCRIPTIONS permission to use this service
     * Subscribe to a plan
     */
    async createSubscriptionWithApplicationRaw(requestParameters: CreateSubscriptionWithApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters.plan === null || requestParameters.plan === undefined) {
            throw new runtime.RequiredError('plan','Required parameter requestParameters.plan was null or undefined when calling createSubscriptionWithApplication.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling createSubscriptionWithApplication.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling createSubscriptionWithApplication.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling createSubscriptionWithApplication.');
        }

        const queryParameters: any = {};

        if (requestParameters.plan !== undefined) {
            queryParameters['plan'] = requestParameters.plan;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewSubscriptionEntityToJSON(requestParameters.newSubscriptionEntity),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * User must have the MANAGE_SUBSCRIPTIONS permission to use this service
     * Subscribe to a plan
     */
    async createSubscriptionWithApplication(requestParameters: CreateSubscriptionWithApplicationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.createSubscriptionWithApplicationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApplicationSubscriptionRaw(requestParameters: GetApiKeysForApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApiKeyEntity>>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiKeysForApplicationSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApiKeyEntityFromJSON));
    }

    /**
     * User must have the READ permission to use this service
     * List all API Keys for a subscription
     */
    async getApiKeysForApplicationSubscription(requestParameters: GetApiKeysForApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApiKeyEntity>> {
        const response = await this.getApiKeysForApplicationSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the APPLICATION_SUBSCRIPTION permission to use this service
     * List APIs subscribed by the application
     */
    async getApiSubscribedRaw(requestParameters: GetApiSubscribedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationEntity>>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApiSubscribed.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApiSubscribed.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApiSubscribed.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscribed`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApplicationEntityFromJSON));
    }

    /**
     * User must have the APPLICATION_SUBSCRIPTION permission to use this service
     * List APIs subscribed by the application
     */
    async getApiSubscribed(requestParameters: GetApiSubscribedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationEntity>> {
        const response = await this.getApiSubscribedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the READ permission to use this service
     * Get subscription information
     */
    async getApplicationSubscriptionRaw(requestParameters: GetApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Subscription>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling getApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionFromJSON(jsonValue));
    }

    /**
     * User must have the READ permission to use this service
     * Get subscription information
     */
    async getApplicationSubscription(requestParameters: GetApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Subscription> {
        const response = await this.getApplicationSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the READ_SUBSCRIPTION permission to use this service
     * List subscriptions for the application
     */
    async getApplicationSubscriptionsRaw(requestParameters: GetApplicationSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionEntityPageResult>> {
        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling getApplicationSubscriptions.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling getApplicationSubscriptions.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling getApplicationSubscriptions.');
        }

        const queryParameters: any = {};

        if (requestParameters.plan) {
            queryParameters['plan'] = requestParameters.plan.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.api) {
            queryParameters['api'] = requestParameters.api.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.status) {
            queryParameters['status'] = requestParameters.status.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.apiKey !== undefined) {
            queryParameters['api_key'] = requestParameters.apiKey;
        }

        if (requestParameters.securityTypes) {
            queryParameters['security_types'] = requestParameters.securityTypes;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions`.replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionEntityPageResultFromJSON(jsonValue));
    }

    /**
     * User must have the READ_SUBSCRIPTION permission to use this service
     * List subscriptions for the application
     */
    async getApplicationSubscriptions(requestParameters: GetApplicationSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionEntityPageResult> {
        const response = await this.getApplicationSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscription1Raw(requestParameters: RenewApiKeyForApplicationSubscription1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiKeyEntity>> {
        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling renewApiKeyForApplicationSubscription1.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys/_renew`.replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiKeyEntityFromJSON(jsonValue));
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Renew an API key
     */
    async renewApiKeyForApplicationSubscription1(requestParameters: RenewApiKeyForApplicationSubscription1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiKeyEntity> {
        const response = await this.renewApiKeyForApplicationSubscription1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplicationSubscriptionRaw(requestParameters: RevokeApiKeyForApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.apikey === null || requestParameters.apikey === undefined) {
            throw new runtime.RequiredError('apikey','Required parameter requestParameters.apikey was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.subscription === null || requestParameters.subscription === undefined) {
            throw new runtime.RequiredError('subscription','Required parameter requestParameters.subscription was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.application === null || requestParameters.application === undefined) {
            throw new runtime.RequiredError('application','Required parameter requestParameters.application was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.envId === null || requestParameters.envId === undefined) {
            throw new runtime.RequiredError('envId','Required parameter requestParameters.envId was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        if (requestParameters.orgId === null || requestParameters.orgId === undefined) {
            throw new runtime.RequiredError('orgId','Required parameter requestParameters.orgId was null or undefined when calling revokeApiKeyForApplicationSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/organizations/{orgId}/environments/{envId}/applications/{application}/subscriptions/{subscription}/apikeys/{apikey}`.replace(`{${"apikey"}}`, encodeURIComponent(String(requestParameters.apikey))).replace(`{${"subscription"}}`, encodeURIComponent(String(requestParameters.subscription))).replace(`{${"application"}}`, encodeURIComponent(String(requestParameters.application))).replace(`{${"envId"}}`, encodeURIComponent(String(requestParameters.envId))).replace(`{${"orgId"}}`, encodeURIComponent(String(requestParameters.orgId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * User must have the MANAGE_API_KEYS permission to use this service
     * Revoke an API key
     */
    async revokeApiKeyForApplicationSubscription(requestParameters: RevokeApiKeyForApplicationSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeApiKeyForApplicationSubscriptionRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetApplicationSubscriptionsExpandEnum = {
    KEYS: 'keys',
    SECURITY: 'security'
} as const;
export type GetApplicationSubscriptionsExpandEnum = typeof GetApplicationSubscriptionsExpandEnum[keyof typeof GetApplicationSubscriptionsExpandEnum];
