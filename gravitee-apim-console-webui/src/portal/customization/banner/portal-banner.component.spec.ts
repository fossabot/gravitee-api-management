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
import {HttpTestingController} from '@angular/common/http/testing';
import {MatButtonHarness} from "@angular/material/button/testing";
import {HarnessLoader} from "@angular/cdk/testing";

import {PortalBannerComponent} from './portal-banner.component';
import {PortalBannerHarness} from './portal-banner.harness';
import {PortalSettingsService} from "../../../services-ngx/portal-settings.service";
import {fakePortalSettings} from "../../../entities/portal/portalSettings.fixture";
import {CONSTANTS_TESTING, GioTestingModule} from "../../../shared/testing";

describe('DeveloperPortalBannerComponent', () => {
  let fixture: ComponentFixture<PortalBannerComponent>;
  let componentHarness: PortalBannerHarness;
  let httpTestingController: HttpTestingController;
  let portalSettingsService: PortalSettingsService;
  let harnessLoader: HarnessLoader;
  let portalSettingsMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GioTestingModule, NoopAnimationsModule, PortalBannerComponent],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    portalSettingsService = TestBed.inject<PortalSettingsService>(PortalSettingsService);

    fixture = TestBed.createComponent(PortalBannerComponent);
    componentHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, PortalBannerHarness);
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  const getSettings = (expected: number) => {
    portalSettingsMock = fakePortalSettings();

    portalSettingsService.get().subscribe((portalSettings) => {
      expect(portalSettings).toMatchObject(portalSettingsMock);
    });

    const requests = httpTestingController.match({
      method: 'GET',
      url: `${CONSTANTS_TESTING.env.baseURL}/settings`,
    });

    expect(requests.length).toBe(expected);
    requests.forEach((req) => req.flush(portalSettingsMock));
    fixture.detectChanges();
  };

  describe('get', () => {
    it('should call the API', (done) => {
      const portalSettingsMock = fakePortalSettings();

      portalSettingsService.get().subscribe((portalSettings) => {
        expect(portalSettings).toMatchObject(portalSettingsMock);
        done();
      });

      const requests = httpTestingController.match({
        method: 'GET',
        url: `${CONSTANTS_TESTING.env.baseURL}/settings`,
      });

      expect(requests.length).toBe(2);
      requests.forEach((req) => req.flush(portalSettingsMock));
    });
  });

  describe('save', () => {
    it('should call the API', (done) => {
      getSettings(2);
      const portalSettingsToSave = fakePortalSettings();

      portalSettingsService.save(portalSettingsToSave).subscribe(() => {
        done();
      });

      const req = httpTestingController.expectOne({
        method: 'POST',
        url: `${CONSTANTS_TESTING.env.baseURL}/settings`,
      });
      expect(req.request.body).toEqual(portalSettingsToSave);

      req.flush(null);
      httpTestingController.expectOne({method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/portal`}).flush({});
    });
  });

  it('should render None radio button selected and not render featured banner elements', async () => {
    getSettings(2);
    await componentHarness.selectRadio(false);
    fixture.detectChanges();

    const saveBtn = await harnessLoader.getHarness(MatButtonHarness.with({text: 'Save'}));
    expect(await saveBtn.isDisabled()).toEqual(false);
    await saveBtn.click();

    const request = httpTestingController.expectOne({
      method: 'POST',
      url: `${CONSTANTS_TESTING.env.baseURL}/settings`,
    });

    request.flush({});
    expect(request.request.body).toEqual({
      ...portalSettingsMock,
      portalNext: {
        ...portalSettingsMock.portalNext,
        bannerConfigEnabled: false,
      },
    });
    httpTestingController.expectOne({method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/portal`}).flush({});
    httpTestingController.expectOne({
      method: 'GET',
      url: `${CONSTANTS_TESTING.env.baseURL}/settings`
    }).flush(portalSettingsMock);
  });

  it('should render Featured banner radio button selected and render featured banner elements', async () => {
    let testTitle = 'Test Title';
    let testSubtitle = 'Test Subtitle';

    getSettings(2);
    await componentHarness.selectRadio(true);
    fixture.detectChanges();

    await componentHarness.setTitle(testTitle);
    await componentHarness.setSubtitle(testSubtitle);

    const title = await componentHarness.getTitle();
    const subtitle = await componentHarness.getSubtitle();

    expect(title).toBe(testTitle);
    expect(subtitle).toBe(testSubtitle);

    const saveBtn = await harnessLoader.getHarness(MatButtonHarness.with({text: 'Save'}));
    expect(await saveBtn.isDisabled()).toEqual(false);
    await saveBtn.click();

    const request = httpTestingController.expectOne({
      method: 'POST',
      url: `${CONSTANTS_TESTING.env.baseURL}/settings`,
    });

    request.flush({});
    expect(request.request.body).toEqual({
      ...portalSettingsMock,
      portalNext: {
        ...portalSettingsMock.portalNext,
        bannerConfigEnabled: true,
        bannerConfigTitle: testTitle,
        bannerConfigSubtitle: testSubtitle,
      },
    });
    httpTestingController.expectOne({method: 'GET', url: `${CONSTANTS_TESTING.env.baseURL}/portal`}).flush({});
    httpTestingController.expectOne({
      method: 'GET',
      url: `${CONSTANTS_TESTING.env.baseURL}/settings`
    }).flush(portalSettingsMock);
  });
});

