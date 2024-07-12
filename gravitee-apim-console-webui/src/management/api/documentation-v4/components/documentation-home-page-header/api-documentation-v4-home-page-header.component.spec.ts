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
import { HarnessLoader } from '@angular/cdk/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';

import { ApiDocumentationV4HomePageHeaderComponent } from './api-documentation-v4-home-page-header.component';

import { ApiDocumentationV4BreadcrumbHarness } from '../api-documentation-v4-breadcrumb/api-documentation-v4-breadcrumb.harness';
import { GioTestingPermissionProvider } from '../../../../../shared/components/gio-permission/gio-permission.service';
import { GioTestingModule } from '../../../../../shared/testing';
import { ApiDocumentationV4Module } from '../../api-documentation-v4.module';

describe('ApiDocumentationV4HomePageHeaderComponent', () => {
  let fixture: ComponentFixture<ApiDocumentationV4HomePageHeaderComponent>;
  let harnessLoader: HarnessLoader;

  const init = async (apiPermissions = ['api-documentation-u', 'api-documentation-c', 'api-documentation-r']) => {
    await TestBed.configureTestingModule({
      declarations: [ApiDocumentationV4HomePageHeaderComponent],
      imports: [NoopAnimationsModule, ApiDocumentationV4Module, MatIconTestingModule, GioTestingModule],
      providers: [{ provide: GioTestingPermissionProvider, useValue: apiPermissions }],
    })
      .overrideProvider(InteractivityChecker, {
        useValue: {
          isFocusable: () => true,
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ApiDocumentationV4HomePageHeaderComponent);
    harnessLoader = TestbedHarnessEnvironment.loader(fixture);
  };

  it('should show breadcrumb', async () => {
    await init();
    const breadcrumb = await harnessLoader.getHarness(ApiDocumentationV4BreadcrumbHarness);
    expect(await breadcrumb.getContent()).toEqual('Home');
  });

  it('should not show add folder button if does not have update permission', async () => {
    await init(['api-documentation-c', 'api-documentation-r']);
    const buttonHarnesses = await harnessLoader.getAllHarnesses(MatButtonHarness.with({ text: 'Add new folder' }));
    expect(buttonHarnesses.length).toEqual(0);
  });
});
