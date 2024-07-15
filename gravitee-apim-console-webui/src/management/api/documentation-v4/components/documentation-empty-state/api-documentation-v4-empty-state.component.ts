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

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { getLogoForPageType, PageType, getTitleForPageType } from '../../../../../entities/management-api-v2';

@Component({
  selector: 'api-documentation-empty-state',
  templateUrl: './api-documentation-v4-empty-state.component.html',
  styleUrls: ['./api-documentation-v4-empty-state.component.scss'],
})
export class ApiDocumentationV4EmptyStateComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @Output()
  onAddPage = new EventEmitter<PageType>();

  @Input()
  isReadOnly = false;

  @Input()
  mode: 'DEFAULT_PAGES' | 'CUSTOM_PAGES' = 'CUSTOM_PAGES';

  emptyPageTitle: string;
  emptyPageMessage: string;

  ngOnInit(): void {
    this.emptyPageTitle = this.getEmptyPageTitle();
    this.emptyPageMessage = this.getEmptyPageMessage();
  }

  private getEmptyPageTitle() {
    if (this.mode === 'CUSTOM_PAGES') {
      return 'No pages available yet';
    } else {
      return 'No homepage set';
    }
  }

  private getEmptyPageMessage() {
    if (this.mode === 'CUSTOM_PAGES') {
      return 'Start creating pages to fill up your folder.';
    } else {
      return 'You have not set up a homepage yet.';
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  // expose constants
  readonly getLogoForPageType = getLogoForPageType;
  readonly getTitleForPageType = getTitleForPageType;
  pageTypes: PageType[] = ['MARKDOWN', 'SWAGGER', 'ASYNCAPI'];
}
