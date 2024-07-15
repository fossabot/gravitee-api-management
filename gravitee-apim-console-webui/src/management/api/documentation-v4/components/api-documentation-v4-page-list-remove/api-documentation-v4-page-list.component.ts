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
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatePipe, NgIf, NgOptimizedImage, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

import { GioTooltipOnEllipsisModule } from '../../../../../shared/components/gio-tooltip-on-ellipsis/gio-tooltip-on-ellipsis.module';
import { GioPermissionModule } from '../../../../../shared/components/gio-permission/gio-permission.module';
import { getLogoForPageType, getTitleForPageType, getTooltipForPageType, Page } from '../../../../../entities/management-api-v2';
@Component({
  selector: 'api-documentation-v4-page-list',
  standalone: true,
  imports: [
    DatePipe,
    GioPermissionModule,
    GioTooltipOnEllipsisModule,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatIconButton,
    MatRow,
    MatRowDef,
    MatTable,
    MatTooltip,
    NgIf,
    NgOptimizedImage,
    NgTemplateOutlet,
    TitleCasePipe,
  ],
  templateUrl: './api-documentation-v4-page-list.component.html',
  styleUrl: './api-documentation-v4-page-list.component.scss',
})
export class ApiDocumentationV4PageListComponent implements OnInit, OnChanges {
  @Input()
  pages: Page[];
  @Input()
  mode: 'HOME_PAGE' | 'PAGE_LIST' = 'HOME_PAGE';
  @Input()
  isReadOnly: boolean;

  @Output()
  onGoToFolder = new EventEmitter<string>();
  @Output()
  onEditPage = new EventEmitter<string>();
  @Output()
  onEditFolder = new EventEmitter<string>();
  @Output()
  onPublishPage = new EventEmitter<string>();
  @Output()
  onUnpublishPage = new EventEmitter<string>();
  @Output()
  onMoveUp = new EventEmitter<string>();
  @Output()
  onMoveDown = new EventEmitter<string>();
  @Output()
  onDeletePage = new EventEmitter<string>();

  dataSource: MatTableDataSource<Page>;
  ariaLabel: string;

  pagesIncludeNonFolders: boolean;
  displayedColumns = ['name', 'status', 'visibility', 'lastUpdated', 'actions'];

  protected readonly getLogoForPageType = getLogoForPageType;
  protected readonly getTitleForPageType = getTitleForPageType;
  protected readonly getTooltipForPageType = getTooltipForPageType;

  ngOnInit(): void {
    this.pagesIncludeNonFolders = this.pages.some((page) => page.type !== 'FOLDER');
    this.ariaLabel = this.mode === 'HOME_PAGE' ? 'Home API page' : 'List of API  pages';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pages) {
      this.dataSource = new MatTableDataSource<Page>(this.pages);
      this.ngOnInit();
    }
  }
}
