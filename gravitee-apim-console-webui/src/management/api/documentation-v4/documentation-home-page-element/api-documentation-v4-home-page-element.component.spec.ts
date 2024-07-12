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

import { ApiDocumentationV4HomePageElementComponent } from './api-documentation-v4-home-page-element.component';

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

  it('does not update dataSource when ngOnChanges is called without pages changes', () => {
    component.dataSource = new MatTableDataSource([]);
    component.dataSource.data = [];
    const initialData = component.dataSource.data;
    component.ngOnChanges({});
    expect(component.dataSource.data).toEqual(initialData);
  });
});
