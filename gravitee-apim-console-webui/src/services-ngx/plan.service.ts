/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IScope } from 'angular';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';

import { Constants } from '../entities/Constants';
import { AjsRootScope } from '../ajs-upgraded-providers';
import { Api, ApiPlan } from '../entities/api';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  constructor(
    private readonly http: HttpClient,
    @Inject('Constants') private readonly constants: Constants,
    @Inject(AjsRootScope) private readonly ajsRootScope: IScope,
    private readonly apiService: ApiService,
  ) {}

  public getApiPlans(apiId: string, status?: string, security?: string): Observable<ApiPlan[]> {
    let params = new HttpParams();

    if (status) {
      params = params.append('status', status);
    }

    if (security) {
      params = params.append('security', security);
    }

    return this.http.get<ApiPlan[]>(`${this.constants.env.baseURL}/apis/${apiId}/plans`, { params });
  }

  public updatePlan(api: Api, plan: ApiPlan): Observable<ApiPlan> {
    return this.http.put<ApiPlan>(`${this.constants.env.baseURL}/apis/${api.id}/plans/${plan.id}`, plan).pipe(
      tap((plan) => {
        this.apiService.syncV2Api(api);
        return plan;
      }),
    );
  }
}
