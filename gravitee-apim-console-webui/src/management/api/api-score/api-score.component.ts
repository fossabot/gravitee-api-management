import { Component, OnInit } from '@angular/core';

import { ApiScore } from './api-score.model';

@Component({
  selector: 'app-api-score',
  templateUrl: './api-score.component.html',
  styleUrl: './api-score.component.scss'
})
export class ApiScoreComponent implements OnInit {
  public status = 'all';

  public apiScores: ApiScore[] = [
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
        },
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
        },
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
        },
      ]
    },
    {
      name: 'Documentation page name one',
      source: 'Swagger',
      action: 'Open File Preview',
      issues: [
        {
          severity: 'warning',
          location: '1:13',
          recommendation: 'OpenAPI “servers” must be present and non-empty array.',
          path: 'paths/.get'
        },
        {
          severity: 'warning',
          location: '2:5',
          recommendation: 'Info object must have “contact” object.',
          path: 'paths/.get'
        },
        {
          severity: 'warning',
          location: '4:13',
          recommendation: 'Operation “description” must be present and non-empty string.',
          path: 'paths/.get'
        },
        {
          severity: 'warning',
          location: '6:16',
          recommendation: 'Operation mush have non-empty “tags” array.',
          path: 'paths/.get'
        }
      ]
    },
    {
      name: 'Documentation page name two',
      source: 'AsyncAPI',
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
  ]

  public isLoading = false;

  constructor(

  ) {}


  ngOnInit() {
  }


  public evaluate() {
    console.log('EVALUATE');
  }
}
