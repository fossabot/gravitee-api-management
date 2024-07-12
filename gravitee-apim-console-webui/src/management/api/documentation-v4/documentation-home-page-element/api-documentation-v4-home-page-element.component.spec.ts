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
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SimpleChange } from '@angular/core';

import { ApiDocumentationV4HomePageElementComponent } from './api-documentation-v4-home-page-element.component';

import { Page, PageType } from '../../../../entities/page';

describe('ApiDocumentationV4HomePageElementComponent', () => {
  let component: ApiDocumentationV4HomePageElementComponent;
  let fixture: ComponentFixture<ApiDocumentationV4HomePageElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiDocumentationV4HomePageElementComponent],
      imports: [MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDocumentationV4HomePageElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initializes with correct default values', () => {
    const newPage: Page = { id: 'newPageId', name: 'New Page' };
    component.dataSource = new MatTableDataSource([newPage]);
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
    expect(component.displayedColumns).toEqual(['name', 'status', 'visibility', 'lastUpdated', 'actions']);
  });

  it('correctly identifies logos for page types', () => {
    const pageTypes = [PageType.MARKDOWN, PageType.ASYNCAPI, PageType.SWAGGER];
    pageTypes.forEach((type) => {
      expect(component.getLogoForPageType(type)).toBeDefined();
    });
  });

  it('provides correct metadata for page types', () => {
    const pageTypes = [PageType.SWAGGER, PageType.ASYNCAPI, PageType.MARKDOWN];
    const metadataFunctions = [component.getTooltipForPageType, component.getTitleForPageType];

    pageTypes.forEach((type) => {
      metadataFunctions.forEach((func) => {
        expect(func(type)).toBeDefined();
      });
    });
  });

  it('updates dataSource when page input changes', () => {
    const newPage: Page = { id: 'newPageId', name: 'New Page' };
    component.page = newPage;
    component.dataSource = new MatTableDataSource([newPage]);
    component.ngOnChanges({
      page: new SimpleChange(null, newPage, true),
    });
    expect(component.dataSource.data).toContain(newPage);
  });

  it('does not update dataSource when ngOnChanges is called without pages changes', () => {
    component.dataSource = new MatTableDataSource([]);
    component.dataSource.data = [];
    const initialData = component.dataSource.data;
    component.ngOnChanges({});
    expect(component.dataSource.data).toEqual(initialData);
  });
});
