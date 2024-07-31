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
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, Validators, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {GioFormSlideToggleModule, GioSaveBarModule} from '@gravitee/ui-particles-angular';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { of } from 'rxjs';

import { GioRoleModule } from '../../../shared/components/gio-role/gio-role.module';
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {EnvironmentSettingsService} from "../../../services-ngx/environment-settings.service";

interface BannerForm {
  enabled: FormControl<boolean>;
  titleText: FormControl<string>;
  subTitleText: FormControl<string>;
}

export interface PageRedirection {
  id?: string;
  name?: string;
}

@Component({
  selector: 'portal-banner',
  templateUrl: './portal-banner.component.html',
  styleUrls: ['./portal-banner.component.scss'],
  imports: [
    CommonModule,
    GioSaveBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioButton,
    MatRadioGroup,
    GioRoleModule,
    FormsModule,
    MatOption,
    MatSelect,
    GioFormSlideToggleModule,
    MatSlideToggle,
  ],
  standalone: true,
})
export class PortalBannerComponent implements OnInit {
  form: FormGroup<BannerForm>;

  constructor(
    private readonly environmentSettings: EnvironmentSettingsService,
  ) {}

  ngOnInit(): void {
    this.initialize();
  }

  private initialize() {
    const environment = this.environmentSettings.getSnapshot();
    console.log("environment.portalNext.bannerConfigEnabled", environment.portalNext.bannerConfigEnabled)
    this.form = new FormGroup<BannerForm>({
      enabled: new FormControl<boolean>(environment.portalNext.bannerConfigEnabled, [Validators.required]),
      titleText: new FormControl<string>(environment.portalNext.bannerConfigTitle, [Validators.required]),
      subTitleText: new FormControl<string>(environment.portalNext.bannerConfigSubtitle, [Validators.required]),
    });
  }

  reset() {
    this.form.reset();
    this.initialize();
  }

  submit() {
    console.log("Form submitted 🚀");
  }

  onBannerTypeChange(value: boolean) {
    this.form.get('enabled').setValue(value);
  }
  protected readonly of = of;
}
