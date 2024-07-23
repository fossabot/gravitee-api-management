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

import { BannerType, BannerEnum } from '../../../entities/management-api-v2/documentation/bannerType';
import { GioRoleModule } from '../../../shared/components/gio-role/gio-role.module';
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Group} from "../../../entities/management-api-v2";
import {MatSlideToggle} from "@angular/material/slide-toggle";

interface BannerForm {
  bannerType: FormControl<BannerType>;
  titleText: FormControl<string>;
  subTitleText: FormControl<string>;
  primaryButtonText: FormControl<string>;
  primaryButtonEnabled: FormControl<boolean>;
  primaryButtonRedirection: FormControl<string[]>;
  secondaryButtonText: FormControl<string>;
  secondaryButtonEnabled: FormControl<boolean>;
  secondaryButtonRedirection: FormControl<string[]>;
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
  bannerTypes = Object.values(BannerEnum);
  pageRedirections: PageRedirection[] = [
    {name: 'Top Bar', id: '0'},
    {name: 'Catalog', id: '1'},
    {name: 'API', id: '2'},
    {name: 'Banner', id: '3'},
    {name: 'Theme', id: '4'},
  ];

  ngOnInit(): void {
    console.log('pageRedirections size: ' + this.pageRedirections.length);
    this.form = new FormGroup<BannerForm>({
      bannerType: new FormControl<BannerType>(BannerEnum.NONE, [Validators.required]),
      titleText: new FormControl<string>('', [Validators.required]),
      subTitleText: new FormControl<string>('', [Validators.required]),
      primaryButtonText: new FormControl<string>('', [Validators.required]),
      primaryButtonRedirection: new FormControl<string[]>([]),
      primaryButtonEnabled: new FormControl<boolean>(false),
      secondaryButtonText: new FormControl<string>('Explore APIs', [Validators.required]),
      secondaryButtonEnabled: new FormControl<boolean>(false),
      secondaryButtonRedirection: new FormControl<string[]>([]),
    });
  }

  reset() {
    this.form.reset({
      bannerType: BannerEnum.NONE,
    });
  }

  submit() {
    // console.log("Form submitted 🚀");
  }

  protected readonly of = of;
}
