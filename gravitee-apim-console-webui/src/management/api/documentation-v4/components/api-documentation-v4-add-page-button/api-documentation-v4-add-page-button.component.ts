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
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { getLogoForPageType, getTitleForPageType, PageType } from '../../../../../entities/management-api-v2';

interface PageTypeVM {
  pageType: PageType;
  label: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'api-documentation-v4-add-page-button',
  templateUrl: './api-documentation-v4-add-page-button.component.html',
  styleUrls: ['./api-documentation-v4-add-page-button.component.scss'],
})
export class ApiDocumentationV4AddPageButtonComponent {
  @Input()
  isReadOnly: boolean;

  @Input()
  hasPages: boolean;

  @Output()
  addPage = new EventEmitter<PageType>();

  @Input()
  buttonCapture: string;

  private pageTypes: PageType[] = ['MARKDOWN', 'SWAGGER', 'ASYNCAPI'];

  pageTypesVm: PageTypeVM[] = this.pageTypes.map((pageType) => ({
    pageType,
    label: getTitleForPageType(pageType),
    src: getLogoForPageType(pageType),
    alt: getTitleForPageType(pageType).toLowerCase() + ' logo',
  }));
}
