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
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCustomizationComponent } from './portal-customization.component';

import {CONSTANTS_TESTING, GioTestingModule} from '../../shared/testing';
import {HttpTestingController} from "@angular/common/http/testing";
import {PortalSettingsService} from "../../services-ngx/portal-settings.service";
import {fakePortalSettings} from "../../entities/portal/portalSettings.fixture";

describe('PortalCustomizationComponent', () => {
  let component: PortalCustomizationComponent;
  let fixture: ComponentFixture<PortalCustomizationComponent>;
  let httpTestingController: HttpTestingController;
  let portalSettingsService: PortalSettingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalCustomizationComponent, GioTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    portalSettingsService = TestBed.inject<PortalSettingsService>(PortalSettingsService);

    fixture = TestBed.createComponent(PortalCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  describe('get', () => {
    it('should call the API', (done) => {
      const portalSettingsToGet = fakePortalSettings();

      portalSettingsService.get().subscribe((portalSettings) => {
        expect(portalSettings).toMatchObject(portalSettingsToGet);
        done();
      });

      httpTestingController.expectOne({ method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/settings` }).flush(portalSettingsToGet);
    });
  });

  describe('save', () => {
    it('should call the API', (done) => {
      const portalSettingsToSave = fakePortalSettings();

      portalSettingsService.save(portalSettingsToSave).subscribe(() => {
        done();
      });

      const req = httpTestingController.expectOne({ method: 'POST', url: `${CONSTANTS_TESTING.env.baseURL}/settings` });
      expect(req.request.body).toEqual(portalSettingsToSave);

      req.flush(null);
      httpTestingController.expectOne({ method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/portal` }).flush({});
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
