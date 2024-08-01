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
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {PortalBannerComponent} from './portal-banner.component';
import {PortalBannerHarness} from './portal-banner.harness';
import {HttpTestingController} from '@angular/common/http/testing';
import {PortalSettingsService} from "../../../services-ngx/portal-settings.service";
import {fakePortalSettings} from "../../../entities/portal/portalSettings.fixture";
import {CONSTANTS_TESTING, GioTestingModule} from "../../../shared/testing";

describe('DeveloperPortalBannerComponent', () => {
  // let component: DeveloperPortalBannerComponent;
  let fixture: ComponentFixture<PortalBannerComponent>;
  let componentHarness: PortalBannerHarness;
  let httpTestingController: HttpTestingController;
  let portalSettingsService: PortalSettingsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GioTestingModule, NoopAnimationsModule, PortalBannerComponent],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    portalSettingsService = TestBed.inject<PortalSettingsService>(PortalSettingsService);


    fixture = TestBed.createComponent(PortalBannerComponent);
    // component = fixture.componentInstance;
    componentHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, PortalBannerHarness);
    fixture.detectChanges();
  });

  describe('get', () => {
    it('should call the API', (done) => {
      const portalSettingsToGet = fakePortalSettings();

      portalSettingsService.get().subscribe((portalSettings) => {
        expect(portalSettings).toMatchObject(portalSettingsToGet);
        done();
      });

      const requests = httpTestingController.match({
        method: 'GET',
        url: `${CONSTANTS_TESTING.env.baseURL}/settings`
      });

      expect(requests.length).toBe(2);
      requests.forEach(req => req.flush(portalSettingsToGet));
    });
  });

  describe('save', () => {
    it('should call the API', (done) => {
      const portalSettingsToSave = fakePortalSettings();

      portalSettingsService.save(portalSettingsToSave).subscribe(() => {
        done();
      });

      const req = httpTestingController.expectOne({method: 'POST', url: `${CONSTANTS_TESTING.env.baseURL}/settings`});
      expect(req.request.body).toEqual(portalSettingsToSave);

      req.flush(null);
      httpTestingController.expectOne({method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/portal`}).flush({});
    });
  });

  // it('should fill form and submit', async () => {
  //   await componentHarness.setName('name');
  //   await componentHarness.reset();
  //   expect(await componentHarness.getName()).toStrictEqual('');
  //
  //   await componentHarness.setName('name');
  //   await componentHarness.submit();
  //   expect(await componentHarness.getName()).toStrictEqual('name');
  // });
  //
  // it('should not be able to save', async () => {
  //   await componentHarness.setName('name');
  //   await componentHarness.setName(null);
  //   expect(await componentHarness.isSubmitInvalid()).toBeTruthy();
  // });
});
