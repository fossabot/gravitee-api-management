import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { isEqual } from 'lodash';

import { ApiScore, ApiScoreIssue } from '../api-score.model';
import { GioTableWrapperFilters } from '../../../../shared/components/gio-table-wrapper/gio-table-wrapper.component';

@Component({
  selector: 'app-api-score-list',
  templateUrl: './api-score-list.component.html',
  styleUrl: './api-score-list.component.scss'
})
export class ApiScoreListComponent implements OnInit {
  @Input() apiScore: ApiScore;
  public displayedColumns: string[] = ['severity', 'location', 'recommendation', 'path'];
  public isLoading = false;

  public filters: GioTableWrapperFilters = {
    pagination: { index: 1, size: 5 },
    searchTerm: ''
  };
  private filters$ = new BehaviorSubject<GioTableWrapperFilters>(this.filters);
  public nbTotalInstances = 0;
  public onFiltersChanged(filters: GioTableWrapperFilters): void {
    this.filters = { ...this.filters, ...filters };
    this.filters$.next(this.filters);
  }
  public apiScoreIssuesPaginated: ApiScoreIssue[] = [];

  ngOnInit() {
    this.nbTotalInstances = this.apiScore.issues.length;
    this.initFilters();
  }

  public openEditor(e: MouseEvent): void {
    e.stopPropagation();
  }

  private initFilters(): void {
    this.filters$
      .pipe(
        distinctUntilChanged(isEqual)
      )
      .subscribe({
        next: (filters: GioTableWrapperFilters) => {
          const { pagination } = filters;
          this.apiScoreIssuesPaginated = this.paginate(pagination);
        }
      });
  }

  private paginate({ index, size }) {
    return this.apiScore.issues.slice((index - 1) * size, index * size);
  }
}
