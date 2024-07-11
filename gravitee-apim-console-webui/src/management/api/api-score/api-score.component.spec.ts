import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InteractivityChecker } from '@angular/cdk/a11y';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatAccordionHarness } from '@angular/material/expansion/testing';

import { ApiScoreComponent } from './api-score.component';
import { ApiScoreHarness } from './api-score.harness';
import { ApiScoreModule } from './api-score.module';
import { ApiScore } from './api-score.model';

import { GioTestingModule } from '../../../shared/testing';


describe('ApiScoreComponent', () => {
  let fixture: ComponentFixture<ApiScoreComponent>;
  let componentHarness: ApiScoreHarness;
  let httpTestingController: HttpTestingController;

  const init = async (
    apiScores: ApiScore[] = [
      {
        name: 'API Definition',
        source: 'Gravitee API definition',
        action: 'Open File Preview',
        issues: [
          {
            severity: 'warning',
            location: '9:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Info object must have “contact” object.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation mush have non-empty “tags” array.',
            path: 'paths/.get'
          }
        ]
      },
      {
        name: 'API Definition',
        source: 'Gravitee API definition',
        action: 'Open File Preview',
        issues: [
          {
            severity: 'warning',
            location: '9:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Info object must have “contact” object.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation mush have non-empty “tags” array.',
            path: 'paths/.get'
          }
        ]
      },
      {
        name: 'API Definition',
        source: 'Gravitee API definition',
        action: 'Open File Preview',
        issues: [
          {
            severity: 'warning',
            location: '9:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Info object must have “contact” object.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation “description” must be present and non-empty string.',
            path: 'paths/.get'
          },
          {
            severity: 'warning',
            location: '10:13',
            recommendation: 'Operation mush have non-empty “tags” array.',
            path: 'paths/.get'
          }
        ]
      }
    ]
  ) => {
    await TestBed.configureTestingModule({
      declarations: [ApiScoreComponent],
      imports: [ApiScoreModule, GioTestingModule, BrowserAnimationsModule, NoopAnimationsModule],
      providers: []
    })
      .overrideProvider(InteractivityChecker, {
        useValue: {
          isFocusable: () => true, // This traps focus checks and so avoid warnings when dealing with
          isTabbable: () => true // This traps focus checks and so avoid warnings when dealing with
        }
      })
      .compileComponents();

    fixture = TestBed.createComponent(ApiScoreComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    componentHarness = await TestbedHarnessEnvironment.harnessForFixture(fixture, ApiScoreHarness);
    fixture.componentInstance.apiScores = apiScores;
  };

  describe('ApiScoreComponent', () => {
    beforeEach(() => {
      init();
    });

    it('should display lists with api scores', async () => {
      const lists: MatAccordionHarness[] = await componentHarness.getAccordion();
      expect(lists).toHaveLength(3);
    });
  });

  describe('ApiScoreComponent', () => {
    describe('apis lists', () => {
      beforeEach(() => {
        init([{
          name: 'API Definition',
          source: 'Gravitee API definition',
          action: 'Open File Preview',
          issues: [
            {
              severity: 'warning',
              location: '9:13',
              recommendation: 'Operation “description” must be present and non-empty string.',
              path: 'paths/.get'
            },
            {
              severity: 'warning',
              location: '10:13',
              recommendation: 'Info object must have “contact” object.',
              path: 'paths/.get'
            },
            {
              severity: 'warning',
              location: '10:13',
              recommendation: 'Operation “description” must be present and non-empty string.',
              path: 'paths/.get'
            },
            {
              severity: 'warning',
              location: '10:13',
              recommendation: 'Operation mush have non-empty “tags” array.',
              path: 'paths/.get'
            }
          ]
        },]);
      });

      it('should display correct number of rows', async () => {
        const lists: MatAccordionHarness[] = await componentHarness.getAccordion();
        expect(lists).toHaveLength(1);

        const table = await componentHarness.getTables();
        const rows = await table.getRows();
        expect(rows.length).toEqual(4);
      });
    });

  });

});
